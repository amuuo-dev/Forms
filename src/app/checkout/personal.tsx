import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import CustomTextInput from "../../components/CustomTextInput";

const PersonalDetailsForm = () => {
  const onNext = () => {
    router.push("/checkout/payment");
  };

  return (
    <View style={styles.container}>
      <CustomTextInput label="Full name" placeholder="John Doe" />
      <CustomTextInput label="Address" placeholder="Address" />
      <View style={{ flexDirection: "row", gap: 5 }}>
        <CustomTextInput
          label="City"
          placeholder="Nairobi"
          containerStyle={{ flex: 1 }}
        />
        <CustomTextInput
          label="Post Code"
          placeholder="134"
          containerStyle={{ flex: 1 }}
        />
      </View>
      <CustomTextInput
        label="Phone Number"
        placeholder="07123890033"
        inputMode="tel"
      />

      <CustomButton title="Next" onPress={onNext} style={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    gap: 5,
  },
  button: {
    marginTop: "auto",
    marginBottom: 15,
  },
});

export default PersonalDetailsForm;
