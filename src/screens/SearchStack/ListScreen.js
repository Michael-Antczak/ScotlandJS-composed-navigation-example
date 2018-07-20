import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class ListScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> List Screen</Text>
        <Button
          onPress={() => this.props.navigation.navigate("Map")}
          title="Go to Map"
          color="#1202ca"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 35
  }
});
