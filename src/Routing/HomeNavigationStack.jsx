import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import Login from "../pages/Login/Login";
import HomePage from "../pages/Home/HomePage";
import EarnCrops from "../pages/Home/EarnCrops";
import RedeemedCrops from "../pages/Home/RedeemedCrops";
import EarnCropsDetails from "../pages/Home/EarnCropsDetails";
import ProductDetails from "../Components/ProductDetails";


const HomeNavigationStack = () => {
  return (
    <Stack.Navigator>     
      <Stack.Screen name="home" component={HomePage} options={{ headerShown: false }} />
      <Stack.Screen name="earn-crops" component={EarnCrops} options={{ headerShown: false }} />  
      <Stack.Screen name="redeem-crops" component={RedeemedCrops} options={{ headerShown: false }} />   
      <Stack.Screen name="product" component={EarnCropsDetails} options={{ headerShown: true }} /> 
      <Stack.Screen name="product-details" component={ProductDetails} options={{ headerShown: false }} />          
    </Stack.Navigator>
  );
};

export default HomeNavigationStack;
