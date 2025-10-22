import React from "react";
import { Text, View, StyleSheet } from "react-native";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";

const PersonalDetailsForm = () => {
  const onNext = () => {
    router.push("/checkout/payment");
  };

  return (
    <View style={styles.container}>
      <Text>This is the Personal details page</Text>
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

export default PersonalDetailsForm;
