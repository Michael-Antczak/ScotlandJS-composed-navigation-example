import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class OffersScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>My offers</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#abc",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    fontSize: 35
  }
});
