import { StyleSheet } from "react-native";
import { theme } from "../../../theme";

export const styles = StyleSheet.create({
  infoLabelContainer: {
    flexDirection: "row",
  },
  infoLabelContainerText: {
    marginRight: 8,
    fontSize: 14,
    color: theme.colors.blue,
    fontFamily: theme.font.interRegular,
    fontWeight: "700",
  },
  infoLabelContainerNumberView: {
    backgroundColor: theme.colors.gray_400,
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  infoLabelContainerNumberText: {
    color: "white",
  },
});
