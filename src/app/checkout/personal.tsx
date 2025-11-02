import React from "react";
import { View, StyleSheet } from "react-native";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import CustomTextInput from "../../components/CustomTextInput";
import KeyboardAwareScrollView from "../../components/KeyboardAwareScrollView";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  PersonalInfo,
  PersonalInformationSchema,
  useCheckoutForm,
} from "../../contexts/CheckoutFormProvider";
import countries from "../../../assets/countries.json";
import CustomPicker from "../../components/CustomPicker";

const PersonalDetailsForm = () => {
  const { setPersonalInfo, personalInfo } = useCheckoutForm();

  const form = useForm<PersonalInfo>({
    resolver: zodResolver(PersonalInformationSchema),
    defaultValues: personalInfo,
  });

  const onNext: SubmitHandler<PersonalInfo> = (data) => {
    //need to validate the form
    setPersonalInfo(data);
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
            name="postcode"
            placeholder="134"
            containerStyle={{ flex: 1 }}
          />
        </View>

        <CustomPicker
          name="country"
          placeholder={{ label: "Select country" }}
          items={countries.map((country) => ({
            label: country.name,
            value: country.code,
          }))}
        />

        <CustomTextInput
          label="Phone Number"
          name="phone"
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
  button: {
    marginTop: "auto",
  },
});

export default PersonalDetailsForm;
