import React from "react";
import { SafeAreaView, View, Text, Image ,TextInput} from "react-native";
import { Card } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DashboardStyles from "../../Styles/DashboardStyles";
import { useNavigation } from "@react-navigation/native";
import {
  SmartSoftButton,
  SmartSoftForm,
  SmartSoftColumns,
  SmartSoftColumn,
} from "soft_digi_native";
import {} from "../../Services/ImageServices";

const PermitViolation = () => {
  return (
    <SafeAreaView style={DashboardStyles.container}>
      <View style={DashboardStyles.headerstyle}>
        <View style={DashboardStyles.HeadTexrStyle}>
          <Text style={DashboardStyles.Textstyle}>Permit Violation</Text>
        </View>
      </View>
      <View style={DashboardStyles.bodyview}>
      <View style={DashboardStyles.searchContainer}>
        <TextInput
          style={DashboardStyles.searchInput}
          placeholder="                   Search Vehicle... "
          
        />
        <MaterialCommunityIcons name="searchbar" color={"black"} size={25} />
      </View>
      

      </View>
    </SafeAreaView>
  );
};

export default PermitViolation;
