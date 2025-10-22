import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";

const PaymentDetailsForm = () => {
  const onNext = () => {
    router.push("/checkout/confirm");
  };

  return (
    <View style={styles.container}>
      <Text>This is the payment details</Text>
      <CustomButton title="Next" onPress={onNext} style={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  button: {
    marginTop: "auto",
    marginBottom: 15,
  },
});

export default PaymentDetailsForm;
