import * as React from "react";
import Svg, { Path } from "react-native-svg";

export const Check = (props) => (
  <Svg
    width={10}
    height={7}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M8.43.342 4.1 4.674 1.616 2.192l-.836.835L4.1 6.346l5.168-5.168L8.43.342Z"
      fill="#F2F2F2"
    />
  </Svg>
);
