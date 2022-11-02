import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.gray_600,
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 24,
  },
  form: {
    flexDirection: "row",
    marginTop: -27,
  },
  formInput: {
    marginRight: 4,
  },
  todoContainer: { marginTop: 33 },
});
