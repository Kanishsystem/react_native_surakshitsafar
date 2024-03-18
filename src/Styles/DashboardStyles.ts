import { StyleSheet } from "react-native";

const DashboardStyles = StyleSheet.create({
  headerstyle:{
   display:"flex",
   
   
    backgroundColor:"#0a4b43",
    width:410,
    height:100
  },
  container:{
    flex:1,
    padding:15,
  },
  Textstyle:{
    color:"white",
    fontSize:22,
  },
  HeadTexrStyle:{
    marginTop:35,
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    padding:15,
  },
  cardView:{
height:"auto",
marginTop:10,
  },
  bodyview:{
    padding:10
  },
  button:{
    backgroundColor:"#0a4b43",
    height:60,
    alignItems:"center",
    width:170
  },
  buttonview:{
display:"flex",
flexDirection:"row",
justifyContent:"space-around",

  },
  profilecardView:{
flexDirection:"row",
justifyContent:"space-between",
  },
  profileText:{
    fontSize:18,
    color:"#0a4b43",

  },
  profileTextview:{
    flexDirection:"row",
    justifyContent:"space-between",

  },
  featureTextStyle:{
    color:"#0a4b43",
    fontWeight:"bold",
    marginTop:10,
    fontSize:17
  },

  featureCard:{
    height:160,
    width:"95%",
    marginTop:10,
    borderBottomWidth:6,
    borderColor:"#0a4b43",
  },
  MonitoringImage:{
    height:70,
    width:70,
    justifyContent:"center",
    alignItems:"center",
    marginTop:10
  },
  featureCardView:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
  },
  MonitoringText:{
marginTop:10
  },
  featureview:{
    display:"flex",
flexDirection:"row",

  },


//LiveMontoring style codes
  LiveMonitoringImage:{
    height:300,
    width:400,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    marginTop:200
  },





  searchContainer:{

  },

  searchInput:{

    height:60,
    width:"100%",
    borderWidth:3,
    borderColor:"#ced3d6"
  },
});

export default DashboardStyles;
