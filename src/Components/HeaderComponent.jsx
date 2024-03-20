import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import HeaderStyles from "../Styles/HeaderStyles";
const HeaderComponent = ({Title,Icon}) => {
  return (
    <View style={HeaderStyles.headerstyle}>
      <Text style={HeaderStyles.Textstyle}>{Title}</Text>
      
    </View>
  );
};

export default HeaderComponent;
