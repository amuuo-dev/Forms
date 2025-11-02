import { ComponentProps } from "react";
import { useController } from "react-hook-form";
import RNPickerSelect from "react-native-picker-select";
import { Text, View } from "react-native";

type CustomPickerProps = {
  name: string;
} & Omit<ComponentProps<typeof RNPickerSelect>, "onValueChange">;

const CustomPicker = ({ name, ...pickerProps }: CustomPickerProps) => {
  const {
    field: { value, onChange, onBlur },
    fieldState: { error },
  } = useController({ name });

  return (
    <View style={{ marginVertical: 4 }}>
      <RNPickerSelect
        {...pickerProps}
        value={value}
        onValueChange={onChange}
        onClose={onBlur}
        placeholder={{ label: "Select country" }}
        useNativeAndroidPickerStyle
        style={{
          viewContainer: {
            marginTop: 4,
            marginBottom: 4,
          },

          inputAndroid: {
            borderColor: error ? "crimson" : "gainsboro",
            borderWidth: 1,
            width: "100%",
            padding: 10,
            borderRadius: 5,
          },
        }}
      />
      <Text style={{ color: "crimson" }}>{error?.message}</Text>
    </View>
  );
};

export default CustomPicker;
