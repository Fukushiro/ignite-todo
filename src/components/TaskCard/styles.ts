import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: theme.colors.gray_500,
    width: 327,
    height: 64,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  text: { color: "white", flex: 1, marginLeft: 8 },
  textComplete: {
    color: theme.colors.gray_300,
    flex: 1,
    marginLeft: 8,
    textDecorationLine: "line-through",
  },
});
