import { StyleSheet } from "react-native";
import Colors from "../../theme/colors";
import RF from "../../utils/rf";

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE
  },
  overview: {
    width: "100%",
    height: RF(72),
    backgroundColor: "rgba(59, 153, 252, 0.1)",
    borderRadius: RF(12),
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: RF(20),
    marginBottom: RF(32)
  },
  logo: {
    width: RF(50),
    height: RF(30)
  },
  overviewTitle: {
    fontSize: RF(18),
    lineHeight: RF(23),
    color: Colors.DARK_BLUE,
    marginBottom: RF(4)
  },
  overviewSubTitle: {
    fontSize: RF(14),
    lineHeight: RF(18),
    color: Colors.TEXT_01
  },
  title: {
    fontSize: RF(16),
    lineHeight: RF(20),
    color: Colors.DARK_BLUE,
    marginBottom: RF(8)
  },
  column: {
    backgroundColor: Colors.INPUT,
    width: "100%",
    height: RF(32),
    paddingHorizontal: RF(24),
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row"
  },
  columnText: {
    fontSize: RF(12),
    lineHeight: RF(15),
    color: Colors.TEXT_01,
    opacity: 0.8
  },
  row: {
    backgroundColor: Colors.WHITE,
    width: "100%",
    height: RF(64),
    borderBottomWidth: 1,
    borderBottomColor: "rgba(148, 140, 156, 0.1)",
    paddingHorizontal: RF(24),
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row"
  },
  rowContent: {
    width: "30%",
    alignItems: "center",
    flexDirection: "row"
  },
  box: {
    width: RF(66),
    height: RF(28),
    borderRadius: RF(8),
    backgroundColor: Colors.GREEN,
    alignItems: "center",
    justifyContent: "center"
  },
  boxText: {
    color: "#FFF",
    fontSize: RF(14),
    lineHeight: RF(18)
  },
  rowText01: {
    color: Colors.DARK_BLUE,
    fontSize: RF(14),
    lineHeight: RF(18)
  },
  rowText02: {
    color: Colors.TEXT_01,
    fontSize: RF(12),
    lineHeight: RF(15)
  },
  rowText03: {
    color: Colors.RED,
    fontSize: RF(14),
    lineHeight: RF(18)
  }
});
