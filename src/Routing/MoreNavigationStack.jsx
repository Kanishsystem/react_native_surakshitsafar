import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MoreIndex from "../pages/More/MoreIndex";
import AboutUs from "../pages/More/AboutUs";
import GetAMate from "../pages/More/GetAMate";


const Stack = createStackNavigator();


const MoreNavigationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="more-index" component={MoreIndex} options={{ headerShown: false }} />
      <Stack.Screen name="more-about-us" component={AboutUs} options={{ title: 'ABOUT US' }}  />
      <Stack.Screen name="more-get-mate" component={GetAMate} options={{ title: 'Get a Mate' }}  />      
    </Stack.Navigator>
  );
};

export default MoreNavigationStack;
