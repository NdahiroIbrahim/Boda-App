import { useEffect } from "react";
import { useRouter } from "expo-router";
import { Redirect } from "expo-router";
import { View, ActivityIndicator} from "react-native";

export default function Index() {
  const isLoggedIn = false;
  return <Redirect href={isLoggedIn ? "/dashboard" : "/signin"} />;
}