import { createStackNavigator } from "react-navigation";

import MapScreen from "../screens/SearchStack/MapScreen";
import ListScreen from "../screens/SearchStack/ListScreen";

const SearchStack = createStackNavigator(
  {
    Map: {
      screen: MapScreen
    },
    List: ListScreen
  },
  {
    initialRouteName: "Map",
    headerMode: "none"
  }
);

export default SearchStack;
