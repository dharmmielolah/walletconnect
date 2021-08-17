import { StyleSheet } from "react-native";
import Colors from "../../theme/colors";
import RF from "../../utils/rf";

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    paddingHorizontal: RF(24)
  },
  wallet: {
    width: "100%",
    marginBottom: RF(37),
    alignItems: "center",
    justifyContent: "center"
  },
  walletIcon: {
    width: RF(100),
    height: RF(100),
    borderRadius: RF(50),
    backgroundColor: Colors.WHITE,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 8,
    marginBottom: RF(16)
  },
  walletWrapper: {
    width: RF(100),
    height: RF(100),
    borderRadius: RF(50),
    overflow: "hidden"
  },
  walletIconText: {
    color: Colors.DARK_BLUE,
    fontSize: RF(16),
    lineHeight: RF(20),
    textAlign: "center"
  },
  tagInputContainer: {
    width: "100%",
    height: RF(230),
    backgroundColor: Colors.INPUT,
    borderRadius: RF(12),
    paddingHorizontal: RF(12),
    paddingVertical: RF(21),
    flexWrap: "wrap",
    flexDirection: "row",
    marginBottom: RF(20),
    borderWidth: 1,
    borderColor: Colors.BORDER
  },
  tagInput: {
    height: RF(30),
    color: Colors.TEXT_01,
    fontSize: RF(14)
  },
  tag: {
    height: RF(30),
    backgroundColor: Colors.TAG,
    paddingHorizontal: RF(12),
    flexDirection: "row",
    borderRadius: RF(8),
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: RF(10),
    marginBottom: RF(12)
  },
  tagText: {
    fontWeight: "100",
    fontSize: RF(14),
    marginRight: RF(8)
  },
  textSubtitle: {
    fontSize: RF(14),
    lineHeight: RF(18),
    color: Colors.TEXT_01
  },
  bottomContent: {
    width: "100%",
    position: "absolute",
    bottom: RF(20),
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: RF(24)
  },
  textArea: {
    width: "100%",
    height: RF(230),
    backgroundColor: Colors.INPUT,
    borderRadius: RF(12),
    paddingHorizontal: RF(12),
    paddingVertical: RF(21),
    marginBottom: RF(20),
    borderWidth: 1,
    borderColor: Colors.BORDER
  },
  textAreaInput: {
    color: Colors.TEXT_01,
    fontSize: RF(14)
  },
  input: {
    width: "100%",
    height: RF(60),
    paddingHorizontal: RF(12),
    backgroundColor: Colors.INPUT,
    color: Colors.TEXT_01,
    fontSize: RF(14),
    borderRadius: RF(12),
    borderWidth: 1,
    borderColor: Colors.BORDER,
    marginBottom: RF(20)
  }
});
