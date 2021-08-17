import React from "react";
import Text from "../../assets/fonts/index";
import { Image, TouchableOpacity, View, ImageBackground } from "react-native";
import Styles from "./style";
import BaseStyle from "../../theme/style";
import { BackHome, Logo, Pattern } from "../../assets/images";
import RF from "../../utils/rf";
import Button, { Style } from "../../components/button";
import Tab from "../../components/tab";
import ROUTES from "../../navigation/routes";
import { WALLETSMOCK } from "../connect/__mock__/wallets";
import Colors from "../../theme/colors";

function Ranking({ navigation }) {
  return (
    <View style={[BaseStyle.flexFull, Styles.container]}>
      <View style={{ paddingHorizontal: RF(24) }}>
        <View style={BaseStyle.header02}>
          <View style={BaseStyle.flexRow}>
            <TouchableOpacity onPress={() => navigation.navigate(ROUTES.CONNECT)}>
              <Image source={BackHome} style={BaseStyle.headerBackHome} />
            </TouchableOpacity>
          </View>
        </View>
        <ImageBackground source={Pattern} style={Styles.overview}>
          <View>
            <Text textStyles={Styles.overviewTitle}>Wallet Connect</Text>
            <Text textStyles={Styles.overviewSubTitle}>Earning crypto made simple</Text>
          </View>
          <Image source={Logo} style={Styles.logo} />
        </ImageBackground>
        <Text textStyles={Styles.title}>Ranking List</Text>
      </View>
      <View style={Styles.column}>
        <Text textStyles={{ ...Styles.columnText, width: "40%" }}>Pair</Text>
        <Text textStyles={{ ...Styles.columnText, width: "45%" }}>Last Price</Text>
        <Text textStyles={{ ...Styles.columnText, width: "15%" }}>24h chg%</Text>
      </View>
      <View style={Styles.row}>
        <View style={{ ...Styles.rowContent, width: "40%" }}>
          <Text textStyles={Styles.rowText01}>BNB</Text>
          <Text textStyles={Styles.rowText02}>/BUSD</Text>
        </View>
        <View style={{ ...Styles.rowContent, width: "45%" }}>
          <Text textStyles={Styles.rowText03}>335.81</Text>
        </View>
        <View style={{ ...Styles.rowContent, width: "15%" }}>
          <View style={Styles.box}>
            <Text textStyles={Styles.boxText}>+2.32%</Text>
          </View>
        </View>
      </View>
      <View style={Styles.row}>
        <View style={{ ...Styles.rowContent, width: "40%" }}>
          <Text textStyles={Styles.rowText01}>BNB</Text>
          <Text textStyles={Styles.rowText02}>/BUSD</Text>
        </View>
        <View style={{ ...Styles.rowContent, width: "45%" }}>
          <Text textStyles={{ ...Styles.rowText03, color: Colors.GREEN }}>335.81</Text>
        </View>
        <View style={{ ...Styles.rowContent, width: "15%" }}>
          <View style={{ ...Styles.box, backgroundColor: Colors.RED }}>
            <Text textStyles={Styles.boxText}>+2.32%</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Ranking;
