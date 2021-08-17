import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { _navigator } from "./service";
import ROUTES from "./routes";
import * as SCREENS from "../screens";
const Routes = createStackNavigator();

export default () => {
  return (
    <NavigationContainer ref={_navigator}>
      <Routes.Navigator initialRouteName={ROUTES.WELCOME}>
        <Routes.Screen name={ROUTES.WELCOME} component={SCREENS.Welcome} options={{ headerShown: false }} />
        <Routes.Screen name={ROUTES.CONNECT} component={SCREENS.WalletConnect} options={{ headerShown: false }} />
        <Routes.Screen name={ROUTES.IMPORTWALLET} component={SCREENS.ImportWallet} options={{ headerShown: false }} />
        <Routes.Screen name={ROUTES.RANKING} component={SCREENS.Ranking} options={{ headerShown: false }} />
      </Routes.Navigator>
    </NavigationContainer>
  );
};
