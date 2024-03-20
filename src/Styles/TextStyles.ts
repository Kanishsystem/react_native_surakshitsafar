import { StyleSheet } from "react-native";

const TextStyles = StyleSheet.create({
  Title: {
    fontWeight: "bold",
    //   textAlign:"center",
    display: "flex",
    color: "white",
    fontSize: 24,
    marginTop: 7,
  },
  detailsTitle:{
    color:"#026930",
    fontSize:16,
    padding:10
  },
  Textstyle:{
    color:"white",
    fontSize:22,
  },
  profileText: {
    fontSize: 18,
    color: "#0a4b43",
  },
  profileTextview: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  FeatureImageText: {
    marginTop: 10,
  },
  featureHeaderText: {
    color: "#0a4b43",
    fontWeight: "bold",
    marginTop: 10,
    fontSize: 17,
  },
});

export default TextStyles;
