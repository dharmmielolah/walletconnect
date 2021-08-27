import { Modal, StyleSheet, View, Pressable, Image } from "react-native";
import React, { useState } from "react";
import BaseStyle from "../theme/style";
import Text from "../assets/fonts";
import RF from "../utils/rf";
import Colors from "../theme/colors";
import { Error, Exit } from "../assets/images";

export default ({ visible, title, message, type, button }) => {
  const [messageVisible, setMessageVisible] = useState(visible);
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={messageVisible}
      onRequestClose={() => setMessageVisible(false)}
    >
      <View style={Style.container}>
        <View style={Style.card}>
          <View style={{ alignItems: "flex-end" }}>
            <Pressable onPress={() => setMessageVisible(false)}>
              <Image source={Exit} style={Style.exit} />
            </Pressable>
          </View>
          <View style={BaseStyle.flexCenter}>
            {type === "error" ? <Image source={Error} style={Style.icon} /> : null}
            {/* replace success icon */}
            {type === "success" ? <Image source={Error} style={Style.icon} /> : null}
            <Text textStyles={Style.title}>{title}</Text>
            <Text textStyles={Style.message}>{message}</Text>
            {button(() => setMessageVisible(false))}
          </View>
        </View>
        <Pressable onPress={() => setMessageVisible(false)} style={Style.backDrop} />
      </View>
    </Modal>
  );
};

const Style = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: RF(20)
  },
  backDrop: {
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  card: {
    width: "100%",
    height: RF(420),
    backgroundColor: Colors.WHITE,
    zIndex: 2,
    borderRadius: RF(20),
    padding: RF(26)
  },
  exit: {
    width: RF(15),
    height: RF(15),
    marginBottom: RF(8)
  },
  icon: {
    width: RF(80),
    height: RF(80),
    marginBottom: RF(35)
  },
  title: {
    fontSize: RF(24),
    lineHeight: RF(30),
    textAlign: "center",
    color: Colors.DARK_BLUE,
    marginBottom: RF(20)
  },
  message: {
    fontSize: RF(16),
    lineHeight: RF(20),
    textAlign: "center",
    color: Colors.TEXT_01,
    marginBottom: RF(40)
  }
});
