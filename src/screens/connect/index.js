import React from "react";
import Text from "../../assets/fonts/index";
import { Image, TouchableOpacity, View, ScrollView } from "react-native";
import Styles from "./style";
import BaseStyle from "../../theme/style";
import { Logo, QR } from "../../assets/images";
import RF from "../../utils/rf";
import Tab from "../../components/tab";
import ROUTES from "../../navigation/routes";
import { WALLETSMOCK } from "./__mock__/wallets";
import navigation from "../../navigation/service";

function Wallet() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingTop: RF(20) }}>
      <Text textStyles={Styles.textSubtitle}>Choose your preferred wallet or app.</Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap", width: "100%", justifyContent: "space-between" }}>
        {WALLETSMOCK.map((wallet, index) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate(ROUTES.IMPORTWALLET)}
              key={index}
              style={Styles.wallet}
            >
              <View style={Styles.walletIcon}>
                <View style={Styles.walletWrapper}>
                  <Image source={wallet.icon} style={{ width: "100%", height: "100%" }} />
                </View>
              </View>
              <Text textStyles={Styles.walletIconText}>{wallet.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={{ paddingBottom: RF(100) }} />
    </ScrollView>
  );
}

function QRCode() {
  return (
    <View style={{ paddingTop: RF(20) }}>
      <Text textStyles={Styles.textSubtitle}>Scan the QR Code</Text>
      <View style={Styles.qrCodeCard}>
        <Image source={QR} style={{ width: "100%", height: "100%", borderRadius: RF(20) }} />
      </View>
    </View>
  );
}

function WalletConnect() {
  return (
    <View style={[Styles.container]}>
      <View style={BaseStyle.header01}>
        <Image source={Logo} style={Styles.logo} />
      </View>
      <Tab tabs={["Wallets", "QR Code"]} initialIndex={0}>
        {activeTab => (
          <>
            {activeTab === 0 ? <Wallet /> : null}
            {activeTab === 1 ? <QRCode /> : null}
          </>
        )}
      </Tab>
    </View>
  );
}

export default WalletConnect;
