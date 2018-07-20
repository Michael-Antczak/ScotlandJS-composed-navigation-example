import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Settings</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ac1276",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 35,
    color: "white"
  }
});
