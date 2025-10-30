import { useSegments } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const steps = [
  { key: "personal", title: "Personal" },
  { key: "payment", title: "Payment" },
  { key: "confirm", title: "Confirm" },
];

const CheckoutFormStepIndicator = () => {
  const segments = useSegments();
  const currentScreens = segments[segments.length - 1];
  const stepIndex = steps.findIndex((step) => step.key === currentScreens);
  return (
    <SafeAreaView
      edges={["top"]}
      style={{
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
        height: 110,
      }}
    >
      {steps.map((eachStep, index) => (
        <View
          style={{
            borderBottomWidth: 3,
            borderColor: stepIndex >= index ? "#005055" : "lightgray",
            flex: 1,
            padding: 5,
          }}
        >
          <Text
            key={eachStep.key}
            style={{
              fontWeight: "bold",
              textAlign: "center",
              color: stepIndex >= index ? "#005055" : "gray",
            }}
          >
            {eachStep.title}
          </Text>
        </View>
      ))}
    </SafeAreaView>
  );
};

export default CheckoutFormStepIndicator;
