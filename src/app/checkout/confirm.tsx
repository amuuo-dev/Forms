import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import KeyboardAwareScrollView from "../../components/KeyboardAwareScrollView";

const ConfirmPage = () => {
  const onNext = () => {
    router.dismissAll();
    router.back();
  };
  return (
    <KeyboardAwareScrollView>
      <Text>This is the Confirm details page</Text>
      <CustomButton title="Submit" onPress={onNext} style={styles.button} />
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: "auto",
    marginBottom: 15,
  },
});

export default ConfirmPage;
