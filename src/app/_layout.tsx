import { Stack } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const RootLayout = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen name="checkout" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaView>
  );
};

export default RootLayout;
