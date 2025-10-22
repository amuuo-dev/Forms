import { Redirect } from "expo-router";
import React from "react";

const InitCheckOutFlow = () => {
  return <Redirect href={"/checkout/personal"} />;
};

export default InitCheckOutFlow;
