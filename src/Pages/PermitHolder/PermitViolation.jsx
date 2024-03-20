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


const PermitViolation = () => {
  const data = [
    { Name: "Owner Name", Holder: "senso permit" },
    { Name: "Violation Details", Holder: "Temporary permit" },
    { Name: "Violation Location", Holder: "150,sector 20,Gurugram,Haryana,122016,India" },
    
  ];

  return (
    <SafeAreaView style={DashboardStyles.container}>
      <View style={DashboardStyles.headerstyle}>
        <View style={DashboardStyles.HeadTextStyle}>
          <Text style={DashboardStyles.Textstyle}>Permit Violation</Text>
        </View>
      </View>

      <View style={DashboardStyles.bodyview}>
        <View style={DashboardStyles.searchContainer}>
          <SmartInput
            style={DashboardStyles.searchInput}
            placeholder="Search Vehicle... "
            rightIcon="magnify"
          />
        </View>
        <Text style={DashboardStyles.VechicleText}>Vehicle List</Text>
        <View>
          <Card style={DashboardStyles.VechicleCard}>
            <Card.Content>
              <View style={DashboardStyles.BusView}>

             
            <MaterialCommunityIcons
            name="bus"
            color={"#0a4b43"}
            size={35}
          />
              <Text style={DashboardStyles.BusViewText}>HR26AW7865</Text>
              </View>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
            {data.map((item, index) => (
              <View style={DashboardStyles.profileTextview} key={index}>
                <Text>{item.Name}</Text>
                <Text>{item.Holder}</Text>
              </View>
            ))}
            </Card.Content>
          </Card>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PermitViolation;
