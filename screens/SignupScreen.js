import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";

export default class SignupScreen extends Component {
  state = {
    name: "",
    age: "",
    city: "",
    country: ""
  };
  continue = () => {
    this.props.navigation.navigate("Chat", {
      name: this.state.name,
      age: this.state.age,
      city: this.state.city
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.circle} />
        <View style={{ marginTop: 64 }}>
          <Image source={require("../assets/chat.png")} style={styles.logo} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F5F7"
  },
  circle: {
    width: 500,
    height: 500,
    borderRadius: 500 / 2,
    backgroundColor: "#FFF",
    position: "absolute",
    left: -120,
    top: -20
  },
  header: {
    fontWeight: "800",
    fontSize: 30,
    color: "#FF1493",
    marginTop: 32
  },
  logo: {
    width: 250,
    height: 250,
    alignSelf: "center",
    justifyContent: "center",
    alignContent: "center"
  }
});
