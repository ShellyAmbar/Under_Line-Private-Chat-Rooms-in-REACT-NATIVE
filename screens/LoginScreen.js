import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Button
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default class LoginScreen extends Component {
  state = {
    name: "",
    age: "",
    city: "",
    country: "",
    groupName: ""
  };
  continue = () => {
    this.props.navigation.navigate("Chat", {
      name: this.state.name,
      age: this.state.age,
      city: this.state.city,
      group: this.state.groupName
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.circle} />
        <View style={{ marginTop: 100 }}>
          <Image
            source={require("../assets/chat_logo.png")}
            style={styles.logo}
          />
        </View>
        <View style={{ marginTop: 50, marginHorizontal: 32 }}>
          <Text style={styles.subTitle}>Group Name: </Text>
          <TextInput
            style={styles.input}
            placeholder="enter The group name"
            onChangeText={groupName => {
              this.setState({ groupName });
            }}
            value={this.state.groupName}
          />

          <Text style={styles.subTitle}>User Name: </Text>
          <TextInput
            style={styles.input}
            placeholder="enter your name"
            onChangeText={name => {
              this.setState({ name });
            }}
            value={this.state.name}
          />

          <View style={{ marginTop: 20, alignItems: "flex-end" }}>
            <TouchableOpacity style={styles.button} onPress={this.continue}>
              <Ionicons name="md-arrow-round-forward" size={30} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4B0082"
  },
  circle: {
    width: 500,
    height: 500,
    borderRadius: 500 / 2,
    backgroundColor: "#663399",
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
    width: 270,
    height: 150,
    alignSelf: "center",
    justifyContent: "center",
    alignContent: "center"
  },
  subTitle: {
    marginTop: 10,
    fontWeight: "200",
    color: "#FF00FF",
    fontSize: 20
  },
  input: {
    marginTop: 5,
    height: 50,
    borderColor: "#7FFFD4",
    borderWidth: 2,
    borderRadius: 30,
    paddingHorizontal: 16,
    color: "#514E5A",
    fontWeight: "600"
  },
  button: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    backgroundColor: "#7FFFD4",
    alignItems: "center",
    justifyContent: "center"
  }
});
