import DateTimePickerModal from "react-native-modal-datetime-picker";
import { View, Text } from "react-native";
import { useState } from "react";
import { useController } from "react-hook-form";

type CustomDatePickerProps = {
  name: string;
};

const CustomDatePicker = ({ name }: CustomDatePickerProps) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({ name });

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    console.warn("A date has been picked: ", date);
    onChange(date);
    hideDatePicker();
  };
  return (
    <View>
      <Text
        style={[
          {
            borderWidth: 1,
            borderColor: "gainsboro",
            padding: 10,
            borderRadius: 5,

            marginTop: 4,
            marginBottom: 2,
            color: "black",
          },
          error && { borderColor: "crimson" },
        ]}
        onPress={showDatePicker}
      >
        {value?.toLocaleDateString() || "Select Date of Birth"}
      </Text>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <Text style={{ color: "crimson" }} numberOfLines={1}>
        {error?.message}
      </Text>
    </View>
  );
};

export default CustomDatePicker;
