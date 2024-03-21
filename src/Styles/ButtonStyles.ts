import { StyleSheet } from "react-native";

const ButtonStyles = StyleSheet.create({
    button: {
        backgroundColor: "#0a4b43",
        height: 60,
        alignItems: "center",
        width: 170,
        borderRadius:15,
        justifyContent:"center",
        color:"white"
      },
      buttonview: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      },
      bluebutton:{
        backgroundColor:"#ceedec",
        borderWidth:2,
        borderColor:"#9dedea",
        height: 60,
        alignItems: "center",
        width: 170,
        borderRadius:15,
        justifyContent:"center",

      }
  });
  
  export default ButtonStyles;