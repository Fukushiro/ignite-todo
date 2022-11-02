import { StyleSheet } from "react-native";
import { theme } from "../../../theme";

export const styles = StyleSheet.create({
  container: {
    width: 24,
    height: 24,
    borderColor: theme.colors.blue,
    borderWidth: 2,
    borderRadius: 999,
    justifyContent: "center",
    alignItems: "center",
  },
  checked: {
    borderColor: theme.colors.purple,
    backgroundColor: theme.colors.purple,
  },
});
