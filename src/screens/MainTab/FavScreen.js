import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class FavScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>My favourite coffee shops</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1287ac",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    fontSize: 35,
    color: "white"
  }
});
