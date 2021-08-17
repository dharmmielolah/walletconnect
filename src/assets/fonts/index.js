import React from "react";
import { Text } from "react-native";

export const fontNames = {
  REGULAR: "GrantipoBeta001-Book"
};

export default ({ type = fontNames.REGULAR, textStyles, children, numberOfLines }) => {
  return (
    <Text numberOfLines={numberOfLines} style={[textStyles, { fontFamily: type }]}>
      {children}
    </Text>
  );
};
