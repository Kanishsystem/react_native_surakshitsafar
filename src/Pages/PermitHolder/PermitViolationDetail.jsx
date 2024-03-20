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
import {} from "../../Services/Imageservices";
import SmartInput from "soft_digi_native/dist/forms/SmartInput";

const PermitViolationDetail = () => {
    const data = [
        { Name: "Violation Location", Holder: "150, sector20, Gurugram,Haryana," },
        { Name: "Permit Type", Holder: "GoodsCarrierPermit" },
        { Name: "Violation State", Holder: "ASSAM" },
        { Name: "Violation Details", Holder: "TemporaryPermit" },
        { Name: "Violation Type", Holder: "TemporaryPermit" },
        { Name: "Valid State", Holder: "HARYANA" },
        { Name: "Violation Time", Holder: "2023-10-12 16:07:23" },
        {title:"Vehicle Current Detais"},

        { Name: "Vehicle No.", Holder: "HR26AW7865" },

        { Name: "Valid State", Holder: "OFF" },

        { Name: "Valid State", Holder: "0" },

        { Name: "Valid State", Holder: "sector 44,Gurugram,Haryana" },

        { Name: "Latitude", Holder: "28.45225" },

        { Name: "Longitude", Holder: "77.0696" },

        
      ];
    
  return (
    <SafeAreaView style={DashboardStyles.container}>
      <View style={DashboardStyles.headerstyle}>
        <View style={DashboardStyles.HeadTextStyle}>
          <Text style={DashboardStyles.Textstyle}>Permit Violation Detail</Text>
        </View>
      </View>
      <View style={DashboardStyles.VolatileBodyView}>

     
      <Card style={DashboardStyles.volatileCard}>
        <Card.Content>
            <Text style={DashboardStyles.BusViewText}>Permit Violation Details</Text>
            {data.map((item, index) => (
                <View>
            <Card style={DashboardStyles.volatilecardview}>
                <Card.Content>
                    <View style={DashboardStyles.VolatileView}>
                    
                        <Text>{item.Name}</Text>
                        <Text>{item.Holder}</Text>
                    </View>
                </Card.Content>
            </Card>
            <Text style={DashboardStyles.BusViewText}>{item.title}</Text>
            </View>
            ))}
        </Card.Content>
      </Card>

      </View>
    </SafeAreaView>
  );
};

export default PermitViolationDetail;
