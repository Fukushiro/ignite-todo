import { useFonts } from "expo-font";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { Home } from "./src/pages/Home";

export default function App() {
  const [fontsLoaded] = useFonts({
    InterRegular: require("./src/assets/fonts/Inter-Regular.ttf"),
    InterBlack: require("./src/assets/fonts/Inter-Black.ttf"),
    InterBold: require("./src/assets/fonts/Inter-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <StatusBar barStyle={"light-content"} />
      <Home />
    </>
  );
}
