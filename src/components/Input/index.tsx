import { StyleProp, TextInput, TextInputProps, TextStyle } from "react-native";
import { styles } from "./styles";

interface InputProps extends TextInputProps {}
export function Input({ ...rest }: InputProps) {
  return (
    <TextInput
      placeholderTextColor="#808080"
      {...rest}
      style={[styles.input, rest.style]}
    />
  );
}
