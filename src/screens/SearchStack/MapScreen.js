import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default class MapScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Map Screen</Text>
        <Button
          onPress={() => this.props.navigation.navigate("List")}
          title="Go to List"
          color="#1202ca"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 35
  }
});
