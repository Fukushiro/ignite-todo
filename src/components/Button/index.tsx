import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { ReactNode } from "react";
import { styles } from "./styles";
interface ButtonProps extends TouchableOpacityProps {
  variant: "icon" | "nada";
  icon?: ReactNode;
}
export function Button({ children, variant, icon, ...rest }: ButtonProps) {
  const stylesVariants = {
    icon: {
      button: styles.buttonIcon,
    },
    nada: {
      button: null,
    },
  };
  return (
    <TouchableOpacity
      {...rest}
      style={[stylesVariants[variant].button, rest.style]}
    >
      {variant === "icon" ? icon : null}
    </TouchableOpacity>
  );
}
