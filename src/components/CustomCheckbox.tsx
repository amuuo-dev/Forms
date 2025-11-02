import Checkbox from "expo-checkbox";
import { useController } from "react-hook-form";
import { View, Text } from "react-native";

type CheckboxProps = {
  name: string;
  label?: string;
};

const CustomCheckbox = ({ name, label }: CheckboxProps) => {
  const {
    field: { value, onChange },
  } = useController({ name });
  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
      <Checkbox style={{ margin: 8 }} value={value} onValueChange={onChange} />
      <Text>{label}</Text>
    </View>
  );
};

export default CustomCheckbox;
