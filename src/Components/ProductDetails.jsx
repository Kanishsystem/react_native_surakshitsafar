//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView, ScrollView } from "react-native-web";
import ProductStyles from "../styles/ProductStyles";
import ImageSlider from "./ImageSlider";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// create a component
const ProductDetails = () => {

    
    
  return (
    <>
      <SafeAreaView>
        <ScrollView>
        <View key={"heading"}>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <View style={ProductStyles.EarnCropLine}></View>
                <Text style={ProductStyles.EarnCropText}>Promos</Text>
              </View>
            </View>
          <View
            key={"Product-main-view"}
            style={ProductStyles.ProductScreenContainer}
          >
          
            <View key={"image-slide"}>
              <ImageSlider />
            </View>
            <View key={"content"}>
              <View key={"ProductName"}>
                {" "}
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                  Product Name
                </Text>
              </View>
              <View key={"amount-details"} style={ProductStyles.AmountDetails}>
                <Text>AUD 526.00</Text>
                <Text>AUD 415.00</Text>
                <Text> C 718</Text>
              </View>
              <View
                key={"like-and-star"}
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  flexDirection: "row",
                  width:"50%",
                  marginVertical:15
                }}
              >
                <View key={"Start-box"} style={ProductStyles.EarnCropDetailIcon}>
                  <MaterialCommunityIcons
                    name="star"
                    color={"#FFC107"}
                    size={30}
                  />
                  <Text style={{marginLeft:5,marginTop:5}}>4.4</Text>
                </View>
                <View key={"like-view"} style={ProductStyles.EarnCropDetailIcon}>
                  <MaterialCommunityIcons
                    name="hand-pointing-right"
                    color={"#58D1FC"}
                    size={30}
                  />
                  <Text style={{marginLeft:5,marginTop:5}}>4.4</Text>
                </View>
              </View>
              {/* Description */}
              <View key={"desc"}>
                <Text key={"decs-heading"} style={{fontSize:20,fontWeight:"bold",marginVertical:10}}>
                Brief Description
                </Text>
                <Text key={"description"}>
                The iPhone is a line of smartphones developed by Apple Inc. Known for their sleek design, powerful performance, and integration with Apple's ecosystem, iPhones run on the iOS operating system and feature high-resolution Retina displays, advanced camera capabilities, and strong security features. They seamlessly integrate with other Apple devices and services, providing a cohesive user experience. The iPhone's regular software updates and vast selection of apps from the App Store contribute to its popularity and continued success in the smartphone market.
                </Text>

              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
});

//make this component available to the app
export default ProductDetails;
