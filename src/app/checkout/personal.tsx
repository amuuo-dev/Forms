import React from "react";
import { View, StyleSheet } from "react-native";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import CustomTextInput from "../../components/CustomTextInput";
import KeyboardAwareScrollView from "../../components/KeyboardAwareScrollView";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const PersonalInformationSchema = z.object({
  fullName: z
    .string({ message: "fullName is required" })
    .min(3, { message: "fullName must be longer that 3 characters" }),
  address: z.string().min(1, { message: "please provide your Address" }),
  city: z.string().min(1, { message: "City is required!" }),
  postcode: z.string().min(1, { message: "Postal code is required!" }),
  phone: z.string().min(1, { message: "Phone is required!" }),
});

type PersonalInfo = z.infer<typeof PersonalInformationSchema>;

const PersonalDetailsForm = () => {
  const form = useForm<PersonalInfo>({
    resolver: zodResolver(PersonalInformationSchema),
  });

  // console.log("errors from forms", form.formState.errors);

  const onNext: SubmitHandler<PersonalInfo> = (data) => {
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
            name="postcode"
            placeholder="134"
            containerStyle={{ flex: 1 }}
          />
        </View>
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
