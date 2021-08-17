import React from "react";
import Text from "../assets/fonts/index";
import { TouchableOpacity, StyleSheet } from "react-native";
import RF from "../utils/rf";
import Colors from "../theme/colors";

export default ({ buttonStyles, text, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={[Style.container, buttonStyles]}>
      <Text textStyles={Style.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export const Style = StyleSheet.create({
  container: {
    width: "100%",
    height: RF(60),
    backgroundColor: Colors.PRIMARY,
    borderRadius: RF(12),
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: RF(16),
    lineHeight: RF(18),
    color: Colors.WHITE
  }
});
