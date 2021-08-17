import React from "react";
import Text from "../../assets/fonts/index";
import { Image, TouchableOpacity, View } from "react-native";
import Styles from "./style";
import BaseStyle from "../../theme/style";
import { Logo } from "../../assets/images";
import RF from "../../utils/rf";
import Button from "../../components/button";
import ROUTES from "../../navigation/routes";

function Welcome({ navigation }) {
  return (
    <View style={[BaseStyle.flexFullCenter, Styles.container]}>
      <Image source={Logo} style={Styles.logo} />
      <Text textStyles={Styles.welcomeText}>Open protocol for connecting Wallets to Dapps</Text>
      <View style={Styles.bottomContent}>
        <Button
          onPress={() => navigation.navigate(ROUTES.CONNECT)}
          text="Connect Wallets"
          buttonStyles={{ marginBottom: RF(24) }}
        />
        <TouchableOpacity>
          <Text textStyles={BaseStyle.linkText}>What is WalletConnect?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Welcome;
