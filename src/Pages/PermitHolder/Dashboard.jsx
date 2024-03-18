import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import { Card } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DashboardStyles from "../../Styles/DashboardStyles";

const Dashboard = () => {
  return (
    <SafeAreaView style={DashboardStyles.container}>
      <View style={DashboardStyles.headerstyle}>
        <View style={DashboardStyles.HeadTexrStyle}>
          <Text style={DashboardStyles.Textstyle}>SURAKSHIT SAFAR</Text>
          <MaterialCommunityIcons
            //   onPress={() => handleBack()}
            name="menu"
            color={"white"}
            size={25}
          />
        </View>
      </View>
      <View style={DashboardStyles.bodyview}>
        <Card style={DashboardStyles.cardView}>
<Card.Content>
    <View>
    
    </View>
   
</Card.Content>
        </Card>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
