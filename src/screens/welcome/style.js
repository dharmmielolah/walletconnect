import { StyleSheet } from "react-native";
import Colors from "../../theme/colors";
import RF from "../../utils/rf";

export default StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    paddingHorizontal: RF(24)
  },
  logo: {
    width: RF(123.97),
    height: RF(74.52),
    marginBottom: RF(40)
  },
  welcomeText: {
    width: "90%",
    fontSize: RF(20),
    lineHeight: RF(25),
    textAlign: "center",
    fontWeight: "100",
    color: Colors.TEXT_01
  },
  bottomContent: {
    width: "100%",
    position: "absolute",
    bottom: RF(75)
  }
});
