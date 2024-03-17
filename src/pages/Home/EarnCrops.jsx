import React from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import {
  SmartSoftColumn,
  SmartSoftColumns,
  SmartSoftMap,
} from "soft_digi_native";
import TestImage from "../../../assets/Images/service.png";
import ProductStyles from "../../styles/ProductStyles";
import { EARN_CROPS_BG } from "../../Service/imageservices";
import { ImageBackground } from "react-native-web";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const EarnCrops = ({ navigation }) => {
  const handleEarnCrops = () => {
    navigation.navigate("product");
  };

  const handleBack = () => {
    navigation.navigate("home");
    console.log("Button Test");
  };
  const data = [
    { index: 1, title: "DINE" },
    { index: 2, title: "SERVICE" },
    { index: 3, title: "SHOP" },
    { index: 4, title: "RETAIL" },
  ];

  const displayFunction = (item) => {
    return (
      <SmartSoftColumns>
        <SmartSoftColumn style={ProductStyles.EarnCropsView} width={12}>
          <View>
            <Image
              style={ProductStyles.SmartEarnImageView}
              source={TestImage}
            ></Image>
            <Text
              onPress={() => handleEarnCrops()}
              style={ProductStyles.EarnCropsTextView}
            >
              {item.title}
            </Text>
          </View>
        </SmartSoftColumn>
      </SmartSoftColumns>
      
    );
  };

  return (
    <>
      <ScrollView>
        <View key={"earn_image"}>
          <ImageBackground style={{ height: 100 }} source={EARN_CROPS_BG}>
            <MaterialCommunityIcons
              onPress={() => handleBack()}
              name="arrow-left"
              color={"white"}
              size={30}
            />
            <View key={"ImageOne"} style={{ marginTop: 25 }}>
              <View
                key={"earnOne"}
                style={{ display: "flex", flexDirection: "row" }}
              >
                <View style={ProductStyles.EarnCropLine}></View>
                <Text style={ProductStyles.EarnCropsText}>Earn CROPs</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.container}>
          <SmartSoftMap data={data} mapFunction={displayFunction} width={12} />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  inputBox: {
    backgroundColor: "white",
  },
  login: {
    height: 200,
    width: "100%",
    borderRadius: 20,
    marginVertical: 20,
  },
});

export default EarnCrops;
