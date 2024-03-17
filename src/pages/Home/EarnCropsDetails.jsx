import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native-web";
import ProductStyles from "../../styles/ProductStyles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  SmartSoftColumn,
  SmartSoftColumns,
  SmartSoftMap,
} from "soft_digi_native";
import ProductView from "../../Components/ProductView";

const EarnCropsDetails = ({ navigation }) => {
  const data = [
    { index: 1, title: "DINE" },
    { index: 2, title: "SERVICE" },
    { index: 3, title: "SHOP" },
    { index: 4, title: "RETAIL" },
    { index: 1, title: "DINE" },
    { index: 2, title: "SERVICE" },
    { index: 3, title: "SHOP" },
    { index: 4, title: "RETAIL" },
    { index: 1, title: "DINE" },
    { index: 2, title: "SERVICE" },
    { index: 3, title: "SHOP" },
    { index: 4, title: "RETAIL" },
  ];

  const displayFunction = (item) => {
    return (
      <SmartSoftColumns>
        <SmartSoftColumn width={12}>
          <ProductView navigation={navigation} />
        </SmartSoftColumn>
      </SmartSoftColumns>
    );
  };
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <View key={"earnDetailContainer"}>
            <View key={"mainHeading"} style={ProductStyles.EarnCropDetailIcon}>
              <View key={"titleItems"} style={ProductStyles.EarnCropDetailIcon}>
                <View style={ProductStyles.EarnCropLine}></View>
                <Text style={ProductStyles.EarnCropText}>Dine</Text>
              </View>

              <View style={ProductStyles.EarnCropDetailIcon}>
                <MaterialCommunityIcons
                  name="arrow-left-drop-circle-outline"
                  size={30}
                />
                <MaterialCommunityIcons
                  name="arrow-right-drop-circle-outline"
                  size={30}
                />
              </View>
            </View>
            <View
              key={"main-container"}
              style={ProductStyles.EarnCropContainer}
            >
              <SmartSoftMap
                data={data}
                mapFunction={displayFunction}
                width={6}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default EarnCropsDetails;
