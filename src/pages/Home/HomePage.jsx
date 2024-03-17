import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { Button, Card } from "react-native-paper";

import {
  BLUE_BELL,
  C_IMAGE,
  DINE_BACK,
  DINE_BACK_TWO,
  EARN_CROPS_BG,
  HOME_PAGE_ONE,
  HOME_PAGE_THREE,
  HOME_PAGE_TWO,
  LABEL_ONE,
  LABEL_THREE,
  LABEL_TWO,
  LABELs_ONE,
  LABELs_THREE,
  LABELs_TWO,
  MEN_LOGO,
  REDEEM_CROP_BG,
  SCROLL,
  VECTOR,
} from "../../Service/imageservices";
import MainLayout from "../../Themes/MainLayout";
import EarnCrops from "./EarnCrops";
import ProductStyles from "../../styles/ProductStyles";
import Promos from "./Promos";
import EarnCropsDetails from "./EarnCropsDetails";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ProductDetails from "../../Components/ProductDetails";
const HomePage = ({ navigation }) => {
  const handleEarnCrops = () => {
    navigation.navigate("earn-crops");
    console.log("Button Test");
  };
  const handleRedeemCrops = () => {
    navigation.navigate("redeem-crops");
    console.log("Button Test");
  };

  const EarnCropsHomeView = ()=>{
    return(
      <>
      <View key={"earnMainView"}>
        <ImageBackground style={ProductStyles.earnCropsBG} source={EARN_CROPS_BG} >
          <View key={"earn-crop-sub-view"} style={ProductStyles.EarnCropSubView}>
          <View style={ProductStyles.EarnCropDetailIcon} key={"earnView"}>
        <View style={{ display: "flex", flexDirection: "row" }}>
                  <View style={ProductStyles.EarnCropLine}></View>
                  <Text
                    style={ProductStyles.EarnCropsText}
                    onPress={() => handleRedeemCrops()}
                  >
                    Earn CROPs
                  </Text>
                </View>
                < View key={"earn-icon"}>
                <MaterialCommunityIcons  onPress={() => handleEarnCrops()} name="arrow-right" size={30} color="white" />
                </View>
                </View>

                <Text style={ProductStyles.EarnCropsBottomText}>
                Enjoy loyalty benefits for all your purchase! Make every dollar count
                </Text>
                </View>
        </ImageBackground>

      </View>
      </>
    )
  }
  return (
    <>
      <MainLayout>
        <ScrollView>
          <View style={styles.HomeContainer}>
            <View style={styles.containers}>
              <Text style={styles.txtcolor}>Hi Salman</Text>
           
            </View>

            <Card style={styles.card}>
              <Card.Content style={styles.UserDetails}>
                <Image source={VECTOR} style={styles.Cimage}></Image>
                <Text style={styles.Ctext}>xxx98</Text>
              </Card.Content>
            </Card>
            {/* Earncards */}
            {EarnCropsHomeView()}

          
            {/* Labelcard */}
            <View style={styles.labelview}>
              <Card style={styles.labelcard}>
                <Card.Content>
                  <View style={styles.labels}>
                    <Image
                      style={ProductStyles.HomeImage}
                      source={HOME_PAGE_ONE}
                    ></Image>
                    <Image
                      style={ProductStyles.HomeImage}
                      source={HOME_PAGE_TWO}
                    ></Image>
                    <Image
                      style={ProductStyles.HomeImage}
                      source={HOME_PAGE_THREE}
                    ></Image>
                  </View>
                </Card.Content>
              </Card>
            </View>
            {/* Promos */}
            <Promos />

            <View>
              <ImageBackground
                style={styles.imagelabel}
                source={REDEEM_CROP_BG}
              >
                <View style={ProductStyles.EarnCropDetailIcon}>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <View style={ProductStyles.EarnCropLine}></View>
                  <Text
                    style={ProductStyles.EarnCropsText}
                    onPress={() => handleRedeemCrops()}
                  >
                    Redeem CROPs
                  </Text>
               
                </View>
                < View key={"earn-icon"}>
                 <MaterialCommunityIcons  onPress={() => handleRedeemCrops()} name="arrow-right" size={30} color="white" />
                </View>
                </View>

                <Text style={ProductStyles.EarnCropsBottomText}>
                  A world of benefits awaits you! Redeems CROPs for your
                  choicest offer
                </Text>
              </ImageBackground>
            </View>
           
          </View>
< ProductDetails />
        </ScrollView>
      </MainLayout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    borderWidth: 2,
    borderColor: "black",
  },
  containers: {
    height: 45,
    width: "100%",
    backgroundColor: "#faf8f7",
    borderBottomWidth: 4,
    borderColor: "#e0e0e0",
  },
  UserDetails: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  txtcolor: {
    color: "#076fde",
    fontWeight: "bold",
    fontSize: 17,
    marginLeft: 28,
    marginTop: 10,
  },
  bellimage: {
    height: 29,
    width: 29,
    position: "absolute",
    marginLeft: 300,
    marginTop: 6,
  },
  menlogo: {
    height: 35,
    width: 35,
    marginTop: 3,
    marginLeft: 350,
    position: "absolute",
  },
  card: {
    height: 49,
    width: "100%",
    textAlign: "center",
    backgroundColor: "white",
    marginTop: 20,
    marginBottom:60
  },

  Cimage: {
    height: 25,
    width: 17,
    marginRight: 10,
  },

  Ctext: {
    color: "#076fde",

    fontWeight: "bold",
    fontSize: 19,
  },

  homelabel: {
    marginTop: 60,
  },

  imagelabel: {
    height: 200,
    width: "100%",
  },
  imageback: {
    height: 163,
    width: 419,
  },
  imagescroll: {
    position: "absolute",
    marginTop: 122,
    marginLeft: 8,
  },
  textscroll: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    marginLeft: 30,
    marginTop: 116,
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
  },
  button: {
    color: "blue",
    borderColor: "lightblue",
    borderWidth: 2,
    height: 47,
    width: 96,
    position: "absolute",
    backgroundColor: "white",
    marginLeft: 300,
    marginTop: 105,
    fontWeight: "bold",
  },

  labelcard: {
    height: 115,
    width: "100%",
    marginLeft: 9,
    backgroundColor: "#66BCF5",
    borderWidth: 2,
    borderColor: "white",
  },

  labels: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  labelview: {
    position: "absolute",
    marginLeft: 25,
    alignItems:"center",
    justifyContent:"center",
    marginTop: 130,
  },
});
export default HomePage;
