import { StyleSheet } from "react-native";
import SiteColors from "./SiteColors";

const ProductStyles = StyleSheet.create({
  subTitle: {
    fontWeight: "bold",
    textAlign: "center",
    color: SiteColors.primary,
    fontSize: 24,
  },
  EarnCropsView: {
    flex: 1,
    position: "relative",
    height: 165,
    width: "100%",
    borderRadius: 20,
    marginVertical: 15,

    overflow: "hidden",
  },
  EarnCropsTextView: {
    position: "absolute",
    bottom: 0,
    height: 35,
    backgroundColor:"rgba(0, 0, 0, 0.2)",
    width: "100%",
    paddingVertical: 2,
    textAlign: "center",
    fontSize: 22,
    color: SiteColors.White,
    fontWeight: "bold",
    textTransform: "uppercase",
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
  },
  SmartEarnImageView: {
    height: 165,
    width: "100%",
  },
 
  HomeImage: {
    height: 80,
    width: 100,
  },

  // ProductView component Styles

  iconsstyle: {
    marginTop: 14,
    backgroundColor: "#ecebed",
    height: 23,
    width: 23,
    borderRadius: 6,
    marginLeft: 5,
  },
  eyeoicon: {
    marginTop: 14,
    backgroundColor: "#ecebed",
    height: 22,
    width: 22,
    borderRadius: 6,
  },
  rating: {
    fontSize: 10,
    marginLeft: 5,
  },
  icons: {
    marginLeft: 3,
    marginTop: 3,
  },
  icon: {
    flexDirection: "row",
    marginTop: 3,
  },
  Cimage: {
    marginTop: 3,
    height: 19,
  },
  container: {
    // display: "flex",
    // flexDirection: "row",
    marginLeft: 20,
  },

  card: {
    display: "flex",
    // height: 155,
    // width:"100%",
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#51c0d6",
    marginTop: 30,
  },
  cardcover: {
    padding: 6,
    marginRight: 9,
    height: 103,
  },

  CardText: {
    display: "flex",
  },
  Audview: {
    flexDirection: "row",
    marginTop: 12,
  },
  Cview: {
    flexDirection: "row",
  },
  Audtext: {
    fontSize: 11,
    marginTop: 4,
  },
  AudNumber: {
    marginLeft: 5,
    fontSize: 16,
  },
  Cnumber: {
    marginLeft: 5,
  },

  iconsview: {
    flexDirection: "row",
  },
  star: {
    display: "flex",
    flexDirection: "row",
  },
  EarnCropLine:{
    height:25,
    width:5,
    backgroundColor:"blue",
    borderRadius:5,
    display:"flex",
    alignItems:"flex-end",
    justifyContent:"flex-start",
    
    marginLeft:20,
    marginTop:10
  },
  EarnCropsBottomText:{
    color:"white",  
    marginBottom:15,
    fontSize:10,
    marginLeft:15,
  
  },
  PromosContainer:{
    backgroundColor:"white",
    borderRadius:10,
    margin:10

  },
  EarnCropHeaderView:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between"

  },
  EarnCropText:{
fontSize:25,
fontWeight:"bold",  
marginLeft:5,
marginTop:5,

  },
EarnCropsText:{
  fontSize:25,
  fontWeight:"bold",
  color:"white",
  marginTop:3,
  marginLeft:5
},
EarnCropContainer:{
  backgroundColor:"white",
  borderRadius:10,
  flex:1
},
EarnCropDetailIcon:{
display:"flex",
flexDirection:"row",
justifyContent:"space-between"


},
EarnCropHomeContainer:{
  padding:5,
  backgroundColor:"white",
  marginTop:100
},
earnCropsHomeMainContainer:{
  display:"flex",
  flex:1



},
earnCropsBG:{
  height:180,
  width:"100%"

},
EarnCropSubView:{
 marginTop:130
},

AmountDetails:{
  display:"flex",
  justifyContent:"space-between",
  flexDirection:"row",
  marginVertical:10
},
ProductScreenContainer:{
  backgroundColor:"white",
  borderRadius:10,
  padding:10,
  margin:10

}




  
});

export default ProductStyles;
