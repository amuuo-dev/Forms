import { router } from "expo-router";
import { createContext, PropsWithChildren, useContext, useState } from "react";
import * as z from "zod";
import { id } from "zod/v4/locales";

export const PersonalInformationSchema = z.object({
  fullName: z
    .string({ message: "fullName is required" })
    .min(3, { message: "fullName must be longer that 3 characters" }),
  address: z.string().min(1, { message: "please provide your Address" }),
  city: z.string().min(1, { message: "City is required!" }),
  postcode: z.string().min(1, { message: "Postal code is required!" }),
  phone: z.string().min(1, { message: "Phone is required!" }),
});

export type PersonalInfo = z.infer<typeof PersonalInformationSchema>;

export const PaymentSchema = z.object({
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

export type PaymentInfo = z.infer<typeof PaymentSchema>;

type CheckoutFormContextProps = {
  personalInfo: PersonalInfo | undefined;
  setPersonalInfo: (data: PersonalInfo | undefined) => void;
  paymentInfo: PaymentInfo | undefined;
  setPaymentInfo: (data: PaymentInfo | undefined) => void;
  onSubmit: () => void;
};

const CheckoutFormContext = createContext<CheckoutFormContextProps>({
  personalInfo: undefined,
  setPersonalInfo: () => {},
  paymentInfo: undefined,
  setPaymentInfo: () => {},
  onSubmit: () => {},
});

const CheckoutFormProvider = ({ children }: PropsWithChildren) => {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | undefined>();
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo | undefined>();

  const onSubmit = () => {
    if (!personalInfo || !paymentInfo) {
      console.log("The form is incomplete");
      return;
    }

    setPersonalInfo(undefined);
    setPaymentInfo(undefined);
    router.dismissAll();
    router.back();
  };

  return (
    <CheckoutFormContext.Provider
      value={{
        personalInfo,
        setPersonalInfo,
        paymentInfo,
        setPaymentInfo,
        onSubmit,
      }}
    >
      {children}
    </CheckoutFormContext.Provider>
  );
};

export const useCheckoutForm = () => useContext(CheckoutFormContext);

export default CheckoutFormProvider;
