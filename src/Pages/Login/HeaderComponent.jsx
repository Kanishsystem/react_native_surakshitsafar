import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
const HeaderComponent = ({Title,Icon}) => {
  return (
    <View style={styles.headerstyle}>
      <Text style={styles.Textstyle}>{Title}</Text>
      
    </View>
  );
};
const styles = StyleSheet.create({
  headerstyle: {
    display: "flex",
    backgroundColor: "#0a4b43",
    width: 410,
    height: 120,
  },
  Textstyle: {
    color: "white",
    fontSize: 30,
    marginTop:38,
    padding:20
  },
  
});
export default HeaderComponent;
