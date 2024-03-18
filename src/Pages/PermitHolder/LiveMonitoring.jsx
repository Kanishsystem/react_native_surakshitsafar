import React from "react";
import { SafeAreaView, View, Text, Image } from "react-native";
import { Card } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DashboardStyles from "../../Styles/DashboardStyles";
import {
  SmartSoftButton,
  SmartSoftForm,
  SmartSoftColumns,
  SmartSoftColumn,
} from "soft_digi_native";
import {
  DRIVERS_PERMIT,
  MONITORING_PERMIT,
  NO_DATA_FOUND,
  VEHICLE_PERMIT,
  VIOLATION_PERMIT,
} from "../../Services/ImageServices";

const LiveMonitoring = () => {
  return (
    <SafeAreaView>
      <View style={DashboardStyles.headerstyle}>
        <View style={DashboardStyles.HeadTexrStyle}>
          <Text style={DashboardStyles.Textstyle}>Live Monitoring</Text>
        </View>
      </View>
      <Image
        style={DashboardStyles.LiveMonitoringImage}
        source={NO_DATA_FOUND}
      ></Image>
    </SafeAreaView>
  );
};

export default LiveMonitoring;
