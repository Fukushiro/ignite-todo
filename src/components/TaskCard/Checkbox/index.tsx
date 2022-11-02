import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { Check } from "../../../assets/Check";
import { styles } from "./styles";
interface CheckboxProps extends TouchableOpacityProps {
  checked: boolean;
  onClick: () => void;
}
export function Checkbox({ checked, onClick, ...rest }: CheckboxProps) {
  return (
    <TouchableOpacity {...rest} onPress={onClick}>
      <View style={[styles.container, checked ? styles.checked : null]}>
        {!!checked ? <Check /> : null}
      </View>
    </TouchableOpacity>
  );
}
