import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";

const ConfirmPage = () => {
  const onNext = () => {
    router.dismissAll();
    router.back();
  };
  return (
    <View style={styles.container}>
      <Text>This is the Confirm details page</Text>
      <CustomButton title="Submit" onPress={onNext} style={styles.button} />
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

export default ConfirmPage;
