import { ComponentProps } from "react";
import { useController } from "react-hook-form";
import {
  TextInput,
  StyleSheet,
  View,
  Text,
  StyleProp,
  ViewStyle,
} from "react-native";

type CustomTextInputProps = {
  label?: string;
  containerStyle?: StyleProp<ViewStyle>;
  name: string;
} & ComponentProps<typeof TextInput>;

const CustomTextInput = ({
  label,
  containerStyle,
  name,
  ...textInputProps
}: CustomTextInputProps) => {
  const {
    field: { value, onChange, onBlur },
    fieldState: { error },
  } = useController({ name });

  return (
    <View style={containerStyle}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        {...textInputProps}
        value={value}
        onBlur={onBlur}
        onChangeText={onChange}
        style={[
          styles.input,
          textInputProps.style,
          error ? styles.errorInput : {},
        ]}
      />
      <Text style={styles.error} numberOfLines={1}>
        {error?.message}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: "gainsboro",
    marginTop: 4,
    marginBottom: 2,
  },
  errorInput: {
    borderColor: "crimson",
  },
  label: {
    fontWeight: "600",
    color: "dimgray",
  },
  error: {
    color: "crimson",
    height: 17,
  },
});

export default CustomTextInput;
