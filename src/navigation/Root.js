import React from "react";
import { Button } from "react-native";
import { createStackNavigator } from "react-navigation";

import SettingsScreen from "../screens/SettingsScreen";
import MainTabStack from "./MainTabStack";

import { COLORS } from "../constants";

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainTabStack,
      navigationOptions: ({ navigation }) => ({
        title: "KOFEE",
        headerStyle: {
          backgroundColor: COLORS.headerBackground
        },
        headerTitleStyle: {
          color: COLORS.headerFont
        },
        headerRight: (
          <Button
            onPress={() => navigation.navigate("Settings")}
            title="Settings"
            color="#fff"
          />
        )
      })
    },
    Settings: SettingsScreen
  },
  {
    initialRouteName: "Main"
  }
);

export default RootStack;
