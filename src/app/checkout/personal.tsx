import React from "react";
import { View, StyleSheet } from "react-native";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import CustomTextInput from "../../components/CustomTextInput";
import KeyboardAwareScrollView from "../../components/KeyboardAwareScrollView";
import {
  useForm,
  SubmitHandler,
  Controller,
  FormProvider,
} from "react-hook-form";

const PersonalDetailsForm = () => {
  const form = useForm();

  console.log("errors from forms", form.formState.errors);

  const onNext: SubmitHandler<any> = (data) => {
    //need to validate the form
    console.log("this is the data", data);
    router.push("/checkout/payment");
  };

  return (
    <KeyboardAwareScrollView>
      <FormProvider {...form}>
        <CustomTextInput
          label="Full name"
          placeholder="John Doe"
          name="fullName"
        />

        <CustomTextInput label="Address" placeholder="Address" name="address" />

        <View style={{ flexDirection: "row", gap: 5 }}>
          <CustomTextInput
            label="City"
            placeholder="Nairobi"
            name="city"
            containerStyle={{ flex: 1 }}
          />
          <CustomTextInput
            label="Post Code"
            name="postCode"
            placeholder="134"
            containerStyle={{ flex: 1 }}
          />
        </View>
        <CustomTextInput
          label="Phone Number"
          name="phoneNumber"
          placeholder="07123890033"
          inputMode="tel"
        />

        <CustomButton
          title="Next"
          onPress={form.handleSubmit(onNext)}
          style={styles.button}
        />
      </FormProvider>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
    gap: 5,
  },
  button: {
    marginTop: "auto",
  },
});

export default PersonalDetailsForm;
