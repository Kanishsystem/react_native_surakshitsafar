import React from "react";
import { SafeAreaView, View, Text, Image, TextInput } from "react-native";
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
import SmartInput from "soft_digi_native/dist/forms/SmartInput";

const DriverOnDuty = () => {
  return (
    <SafeAreaView style={DashboardStyles.container}>
      <View style={DashboardStyles.headerstyle}>
        <View style={DashboardStyles.HeadTextStyle}>
          <Text style={DashboardStyles.Textstyle}>Driver On Duty</Text>
        </View>
      </View>
      <View>
        <Card>
          <Card.Content>
            <SmartSoftColumns>
                <SmartSoftColumn>
                    <SmartSoftButton
                    label="ASSIGN DUTY"
                    style={DashboardStyles.DriverButton}
                    />
                </SmartSoftColumn>
                
            </SmartSoftColumns>
          </Card.Content>
        </Card>
      </View>
    </SafeAreaView>
  );
};

export default DriverOnDuty;
