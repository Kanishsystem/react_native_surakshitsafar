import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import {
  Button,
  Card,
  Checkbox,
  Dialog,
  FAB,
  TextInput,
  Title,
  Paragraph,
  Snackbar,
} from "react-native-paper";
import { SafeAreaView } from "react-native";

import Icon from "react-native-vector-icons/AntDesign";
import { MOBILE_IMAGE, VECTORS } from "../Service/imageservices";
import ProductStyles from "../styles/ProductStyles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ProductView =({navigation}) => {
  const handleProductDetails = () => {
    console.log("Product Details")
    navigation.navigate("product-details");
    
  };


  return (
    <>
      <SafeAreaView style={ProductStyles.container}>
       
          
            <View>
              <Card style={ProductStyles.card}>
                <Card.Content style={ProductStyles.cardcontent}>
                  <View style={ProductStyles.CardText}>
                    <View  onPress={() => handleProductDetails()} >
                      <Image onPress={() => handleProductDetails()} source={MOBILE_IMAGE} style={ProductStyles.cardcover}></Image>
                    </View>

                    <View style={ProductStyles.productview}>
                      <Text onPress={() => handleProductDetails()}>Product 1</Text>
                      <View style={ProductStyles.star}>
                        <View style={ProductStyles.icon}>
                          <MaterialCommunityIcons name="star" size={10} color="#e6d737" />
                          <MaterialCommunityIcons name="star" size={10} color="#e6d737" />
                          <MaterialCommunityIcons name="star" size={10} color="#e6d737" />
                          <MaterialCommunityIcons name="star" size={10} color="#e6d737" />
                          <MaterialCommunityIcons name="star" size={10} color="#bfbfb8" />
                        </View>
                        <Text style={ProductStyles.rating}>4.4</Text>
                      </View>
                      <View style={ProductStyles.Audview}>
                        <Text style={ProductStyles.Audtext}>AUD</Text>
                        <Text style={ProductStyles.AudNumber}>576.00</Text>
                      </View>
                      <View style={ProductStyles.Cview}>
                        <Image source={VECTORS} style={ProductStyles.Cimage}></Image>
                        <Text style={ProductStyles.Cnumber}>4389.00.0</Text>
                      </View>
                      <View style={ProductStyles.iconsview}>
                        <View style={ProductStyles.eyeoicon}>
                        <MaterialCommunityIcons
              // onPress={() => handleBack()}
              name="eye-outline"
              color={"black"}
              size={20}
            />
                        </View>
                        <View style={ProductStyles.iconsstyle}>
                        <MaterialCommunityIcons
              // onPress={() => handleBack()}
              name="heart-outline"
              color={"black"}
              size={20}
            />
                        </View>

                        <View style={ProductStyles.iconsstyle}>
                        <MaterialCommunityIcons
              // onPress={() => handleBack()}
              name="cart-outline"
              color={"black"}
              size={20}
            />
                        </View>
                      </View>
                    </View>
                  </View>
                </Card.Content>
              </Card>
            </View>
          
       
      </SafeAreaView>
    </>
  );
};





export default ProductView;
