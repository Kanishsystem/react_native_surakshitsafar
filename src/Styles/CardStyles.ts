import { StyleSheet } from "react-native";

const CardStyles = StyleSheet.create({
    cardView: {
        height: "auto",
        marginTop: 10,
      },
      profilecardView: {
        flexDirection: "row",
        justifyContent: "space-between",
      },
      featureCard: {
        height: 200,
        width: "95%",
        marginTop: 10,
        borderBottomWidth: 6,
        borderColor: "#0a4b43",
      },
      featureCardView: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      cardColor:{
        backgroundColor:"white"
      }
  });
  
  export default CardStyles;