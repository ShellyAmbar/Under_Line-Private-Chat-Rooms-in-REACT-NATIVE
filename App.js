import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import LoginScreen from "./screens/LoginScreen";
import ChatScreen from "./screens/ChatScreen";
import SignupScreen from "./screens/SignupScreen";

const AppNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Chat: ChatScreen,
    Signup: SignupScreen
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(AppNavigator);
