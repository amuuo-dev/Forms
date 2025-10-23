import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import KeyboardAwareScrollView from "../../components/KeyboardAwareScrollView";

const PaymentDetailsForm = () => {
  const onNext = () => {
    router.push("/checkout/confirm");
  };

  return (
    <KeyboardAwareScrollView>
      <Text>This is the payment details</Text>
      <CustomButton title="Next" onPress={onNext} style={styles.button} />
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: "auto",
    marginBottom: 15,
  },
});

export default PaymentDetailsForm;
