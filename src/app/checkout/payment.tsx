import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import KeyboardAwareScrollView from "../../components/KeyboardAwareScrollView";
import CustomTextInput from "../../components/CustomTextInput";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const PaymentSchema = z.object({
  cardNumber: z.string().min(1),
  expries: z
    .string()
    .min(1)
    .regex(
      /^(0[1-9]|1[0-2])(\/|-)([0-9]{2})$/,
      "Please use the the MM/YY format"
    ),
  cvv: z.coerce.number().min(100).max(999),
});

type PaymentInfo = z.infer<typeof PaymentSchema>;

const PaymentDetailsForm = () => {
  const form = useForm<PaymentInfo>({
    resolver: zodResolver(PaymentSchema),
  });

  const onNext: SubmitHandler<PaymentInfo> = (data) => {
    console.log("this is the payment info", data);
    //validate the form
    router.push("/checkout/confirm");
  };

  return (
    <KeyboardAwareScrollView>
      <FormProvider {...form}>
        <CustomTextInput
          name="cardNumber"
          label="Card Number"
          placeholder="123456789"
          inputMode="numeric"
        />
        <View style={{ flexDirection: "row", gap: 5 }}>
          <CustomTextInput
            name="expries"
            label="Expires"
            placeholder="01/22"
            containerStyle={{ flex: 1 }}
          />
          <CustomTextInput
            name="cvv"
            label="CVV"
            placeholder="123"
            containerStyle={{ flex: 1 }}
            inputMode="numeric"
          />
        </View>

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

export default PaymentDetailsForm;
