import React from "react";
import { createBottomTabNavigator } from "react-navigation";

import SearchStack from "../navigation/SearchStack";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import FavScreen from "../screens/MainTab/FavScreen";
import OffersScreen from "../screens/MainTab/OffersScreen";

import { COLORS } from "../constants";

const MainTabStack = createBottomTabNavigator(
  {
    Search: SearchStack,
    Fav: FavScreen,
    Offers: OffersScreen
  },
  {
    initialRouteName: "Search",
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;

        if (routeName === "Search") {
          iconName = `location-searching`;
        } else if (routeName === "Fav") {
          iconName = `favorite-border`;
        } else if (routeName === "Offers") {
          iconName = `attach-money`;
        }

        return <MaterialIcons name={iconName} size={35} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: COLORS.headerFont,
      inactiveTintColor: "gray",
      activeBackgroundColor: COLORS.activeBackgroundColor
    }
  }
);

export default MainTabStack;
