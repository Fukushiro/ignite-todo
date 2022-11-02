import { Text, View, ViewProps } from "react-native";
import { theme } from "../../../theme";
import { styles } from "./styles";
interface InfoLabelProps extends ViewProps {
  variant: "blue" | "purple";
  text: string;
  number: number;
}
export function InfoLabel({ variant, text, number, ...rest }: InfoLabelProps) {
  const styleVariant = {
    blue: {
      textStyle: styles.infoLabelContainerText,
    },
    purple: {
      textStyle: {
        ...styles.infoLabelContainerText,
        color: theme.colors.purple,
      },
    },
  };
  return (
    <View {...rest} style={[styles.infoLabelContainer, rest.style]}>
      <Text style={styleVariant[variant].textStyle}>{text}</Text>
      <View style={styles.infoLabelContainerNumberView}>
        <Text style={styles.infoLabelContainerNumberText}>{number}</Text>
      </View>
    </View>
  );
}
