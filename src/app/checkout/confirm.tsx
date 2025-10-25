import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../../components/CustomButton";
import { Link, router } from "expo-router";
import KeyboardAwareScrollView from "../../components/KeyboardAwareScrollView";

const personalInfo = {
  fullName: "Vadim Savin",
  address: "Poblenou",
  city: "Barcelona",
  postcode: "1234",
  phone: "60123123123",
  country: "ES",
};

const paymentInfo = {
  cardNumber: "1234123412341234",
  expires: "01/30",
  cvv: "123",
};

const ConfirmPage = () => {
  const onNext = () => {
    router.dismissAll();
    router.back();
  };
  return (
    <KeyboardAwareScrollView>
      <View style={{ gap: 10, flex: 1 }}>
        {personalInfo && (
          <View style={styles.dataContainer}>
            <View style={styles.dataHeader}>
              <Text style={styles.title}>Personal</Text>
              <Link
                href={"/checkout"}
                style={{ color: "#005055", fontWeight: "600" }}
              >
                Edit
              </Link>
            </View>
            {Object.entries(personalInfo).map(([key, value]) => (
              <Text key={key}>
                {key}: {value}
              </Text>
            ))}
          </View>
        )}

        {paymentInfo && (
          <View style={styles.dataContainer}>
            <View style={styles.dataHeader}>
              <Text style={styles.title}>Payment</Text>
              <Link
                href={"/checkout/payment"}
                style={{ color: "#005055", fontWeight: "600" }}
              >
                Edit
              </Link>
            </View>
            {Object.entries(paymentInfo).map(([key, value]) => (
              <Text key={key}>
                {key}: {value}
              </Text>
            ))}
          </View>
        )}

        <CustomButton
          title="Submit Order"
          onPress={onNext}
          style={styles.button}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  dataContainer: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    gap: 3,
    borderColor: "gainsboro",
  },
  dataHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
  button: {
    marginTop: "auto",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
  },
});

export default ConfirmPage;
