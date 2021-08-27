import { StyleSheet } from "react-native";
import Colors from "../../theme/colors";
import RF from "../../utils/rf";

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    paddingHorizontal: RF(24)
  },
  logo: {
    width: RF(36),
    height: RF(22)
  },
  textSubtitle: {
    fontSize: RF(16),
    color: Colors.TEXT_01,
    lineHeight: RF(20),
    textAlign: "center",
    marginBottom: RF(40)
  },
  wallet: {
    width: "30%",
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
    fontSize: RF(12),
    lineHeight: RF(15),
    textAlign: "center"
  },
  qrCodeCard: {
    marginTop: RF(12),
    width: "100%",
    height: RF(311),
    padding: RF(24),
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.05,
    shadowRadius: 16,
    elevation: 8,
    borderRadius: RF(20)
  }
});
