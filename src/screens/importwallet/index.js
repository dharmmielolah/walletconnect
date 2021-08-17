import React from "react";
import Text from "../../assets/fonts/index";
import { Image, TouchableOpacity, View, ScrollView, TextInput } from "react-native";
import Styles from "./style";
import BaseStyle from "../../theme/style";
import { Back } from "../../assets/images";
import RF from "../../utils/rf";
import Button from "../../components/button";
import Tab from "../../components/tab";
import ROUTES from "../../navigation/routes";
import { WALLETSMOCK } from "../connect/__mock__/wallets";

function Phrase() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingTop: RF(32) }}>
      <View style={Styles.tagInputContainer}>
        <View style={Styles.tag}>
          <Text textStyles={Styles.tagText}>balloon</Text>
          <Text>x</Text>
        </View>
        <View style={Styles.tag}>
          <Text textStyles={Styles.tagText}>watermelon</Text>
          <Text>x</Text>
        </View>
        <View style={Styles.tag}>
          <Text textStyles={Styles.tagText}>city</Text>
          <Text>x</Text>
        </View>
        <View style={Styles.tag}>
          <Text textStyles={Styles.tagText}>australia</Text>
          <Text>x</Text>
        </View>
        <TextInput placeholder="Enter Phrase" style={Styles.tagInput} />
      </View>
      <Text textStyles={Styles.textSubtitle}>
        Enter your phrase. Typically 12 (sometimes 24) words separated by single spaces.
      </Text>
    </ScrollView>
  );
}

function KeyStoreJson() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingTop: RF(32) }}>
      <View style={Styles.textArea}>
        <TextInput multiline={true} numberOfLines={10} placeholder="Enter KeyStore Json" style={Styles.textAreaInput} />
      </View>
      <TextInput style={Styles.input} placeholder="Password" />
      <Text textStyles={Styles.textSubtitle}>
        Several lines of text beginning with ’(...)’ plus the password you used in encrypting it.
      </Text>
    </ScrollView>
  );
}

function PrivateKey() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingTop: RF(32) }}>
      <TextInput style={Styles.input} placeholder="Enter Private Key" />
      <Text textStyles={Styles.textSubtitle}>
        Typically a combination of letters and numbers (make sure it is entered correctly.
      </Text>
    </ScrollView>
  );
}

function ImportWallet({ navigation }) {
  return (
    <>
      <View style={[BaseStyle.flexFull, Styles.container]}>
        <View style={BaseStyle.header02}>
          <View style={BaseStyle.flexRow}>
            <TouchableOpacity onPress={() => navigation.pop()}>
              <Image source={Back} style={BaseStyle.headerBack} />
            </TouchableOpacity>
            <Text textStyles={BaseStyle.headerText}>Import Wallet</Text>
          </View>
        </View>
        <View style={Styles.wallet}>
          <View style={Styles.walletIcon}>
            <View style={Styles.walletWrapper}>
              <Image source={WALLETSMOCK[9].icon} style={{ width: "100%", height: "100%" }} />
            </View>
          </View>
          <Text textStyles={Styles.walletIconText}>{WALLETSMOCK[9].name}</Text>
        </View>
        <Tab tabs={["Phrase", "KeyStore Json", "Private Key"]} initialIndex={0}>
          {activeTab => (
            <>
              {activeTab === 0 ? <Phrase /> : null}
              {activeTab === 1 ? <KeyStoreJson /> : null}
              {activeTab === 2 ? <PrivateKey /> : null}
            </>
          )}
        </Tab>
      </View>
      <View style={Styles.bottomContent}>
        <Button
          onPress={() => navigation.navigate(ROUTES.RANKING)}
          text="Import"
          buttonStyles={{ marginBottom: RF(24) }}
        />
      </View>
    </>
  );
}

export default ImportWallet;
