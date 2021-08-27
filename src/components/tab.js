import React, { useEffect, useState } from "react";
import Text from "../assets/fonts/index";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import RF from "../utils/rf";
import Colors from "../theme/colors";

export default ({ tabs, children, initialIndex }) => {
  const [activeTab, setActiveTab] = useState(initialIndex);
  return (
    <>
      <View style={Style.container}>
        {tabs.map((tab, index) => {
          return (
            <TouchableOpacity
              onPress={() => setActiveTab(index)}
              style={activeTab === index ? Style.activeTabButton : Style.tabButton}
              key={index}
            >
              <Text textStyles={activeTab === index ? Style.activeTabText : Style.tabText}>{tab}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      {children(activeTab)}
    </>
  );
};

export const Style = StyleSheet.create({
  container: {
    width: "100%",
    height: RF(50),
    backgroundColor: Colors.PRIMARY_TRANSPARENT,
    borderRadius: RF(12),
    padding: RF(5),
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center"
  },
  activeTabButton: {
    flex: 1,
    height: RF(40),
    backgroundColor: Colors.WHITE,
    borderRadius: RF(8),
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.04,
    shadowRadius: 5,
    elevation: 8
  },
  tabButton: {
    flex: 1,
    height: RF(40),
    alignItems: "center",
    justifyContent: "center"
  },
  tabText: {
    fontSize: RF(14),
    opacity: 0.4,
    lineHeight: RF(18)
  },
  activeTabText: {
    fontSize: RF(14),
    opacity: 1,
    lineHeight: RF(18)
  }
});
