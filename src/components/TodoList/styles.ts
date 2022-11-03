import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  list: {
    marginTop: 20,
  },
  emptyContainer: {
    marginTop: 20,
    paddingTop: 48,
    borderTopWidth: 2,
    borderTopColor: theme.colors.gray_400,
    alignItems: "center",
  },
  emptyContainerText1: {
    color: theme.colors.gray_300,
    fontWeight: "bold",
    fontFamily: theme.font.interBold,
    lineHeight: 140,
  },
  emptyContainerText2: {
    color: theme.colors.gray_300,
    fontFamily: theme.font.interRegular,
  },
});
