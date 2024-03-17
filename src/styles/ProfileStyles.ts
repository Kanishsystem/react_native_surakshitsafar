import { StyleSheet } from "react-native";
import SiteColors from "./SiteColors";

const ProfileStyles = StyleSheet.create({
    scrollimage: {},
    pintext: {
      fontSize: 20,
      fontWeight: "bold",
    },
    container: {
      padding: 15,
    },
    card: {
      height: 510,
      width: "100%",
      marginTop: 20,
    },
    pinchangeimage: {
      height: 165,
      width: 165,
      marginLeft: 90,
    },
    curpintext: {
      marginTop: 15,
      fontWeight: "bold",
      fontSize: 18,
    },
    cardtwo: {
      height: 260,
      width: "100%",
      marginTop: 30,
    },
    catdtwotext: {
      fontWeight: "bold",
      fontSize: 18,
    },
    switch:{
      justifyContent:"space-between",
      flexDirection:"row",
      marginTop:20
    },
    ProductScreenContainer:{
      backgroundColor:"white",
      borderRadius:10,
      padding:10,
      margin:10

    }

  
});

export default ProfileStyles;