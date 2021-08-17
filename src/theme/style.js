import { StyleSheet } from "react-native";
import Colors from "./colors";
import RF from "../utils/rf";

export default StyleSheet.create({
  flexFullCenter: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  flexFull: {
    flex: 1
  },
  linkText: {
    fontSize: RF(16),
    lineHeight: RF(20),
    textAlign: "center",
    color: Colors.PRIMARY
  },
  header01: {
    width: "100%",
    height: RF(120),
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: RF(20),
    backgroundColor: Colors.WHITE,
    marginBottom: RF(16)
  },
  header02: {
    width: "100%",
    height: RF(120),
    justifyContent: "flex-end",
    paddingBottom: RF(20),
    backgroundColor: Colors.WHITE,
    marginBottom: RF(16)
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center"
  },
  headerBack: {
    width: RF(36),
    height: RF(36),
    marginRight: RF(12)
  },
  headerBackHome: {
    width: RF(49),
    height: RF(36)
  },
  headerText: {
    fontSize: RF(20),
    lineHeight: RF(25),
    color: Colors.BLACK
  }
});
