import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import Login from "../pages/Login/Login";
import BottomNavigation from "./BottomNavigation";



const LoginNavigationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="login" component={Login} options={{ headerShown: false }} /> 
      <Stack.Screen name="main" component={BottomNavigation} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};

export default LoginNavigationStack;
