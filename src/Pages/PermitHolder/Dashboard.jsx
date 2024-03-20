import React from "react";
import { SafeAreaView, View, Text, Image } from "react-native";
import { Card } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DashboardStyles from "../../Styles/DashboardStyles";
import { useNavigation } from '@react-navigation/native';
import {
  SmartSoftButton,
  SmartSoftForm,
  SmartSoftColumns,
  SmartSoftColumn,
} from "soft_digi_native";
import { DRIVERS_PERMIT, MONITORING_PERMIT, VEHICLE_PERMIT, VIOLATION_PERMIT } from "../../Services/Imageservices";

const Dashboard = ({Labelone,Labeltwo,imagename,imagelink,Title,Description,Header}) => {

  const navigation = useNavigation(); // Remove the parameter `navigation` here

  // const data = [
  //   { Name: "User Name", Holder: "senso_permit@gmail.com" },
  //   { Name: "First Name", Holder: "sensom permit" },
  //   { Name: "Email", Holder: "senso_permit@gmail.com" },
  //   { Name: "Contact No", Holder: "6350529929" },
  // ];

  const FeatureData = [
    { Name: "Monitoring", image: MONITORING_PERMIT },
    { Name: "Permit Violation", image: VIOLATION_PERMIT },
    { Name: "Drivers On Duty", image: DRIVERS_PERMIT },
    { Name: "Vehicle History", image: VEHICLE_PERMIT },
  ];

  return (
    <SafeAreaView style={DashboardStyles.container}>
      <View style={DashboardStyles.headerstyle}>
        <View style={DashboardStyles.HeadTextStyle}>
          <Text style={DashboardStyles.Textstyle}>SURAKSHIT SAFAR</Text>
          <MaterialCommunityIcons
            name="menu"
            color={"white"}
            size={25}
          />
        </View>
      </View>
      <View style={DashboardStyles.bodyview}>
        <Card style={DashboardStyles.cardView}>
          <Card.Content>
            <View style={DashboardStyles.buttonview}>
              <SmartSoftButton
                label={Labelone}
                type="contained"
                style={DashboardStyles.button}
                width={6}
              />
              <SmartSoftButton
                label={Labeltwo}
                type="contained"
                style={DashboardStyles.button}
                width={6}
              />
            </View>
          </Card.Content>
        </Card>
        <Card style={DashboardStyles.cardView}>
          <Card.Content>
            <View style={DashboardStyles.profilecardView}>
              <Text style={DashboardStyles.profileText}>{Title}</Text>
              <Text style={DashboardStyles.profileText}>{Description}</Text>
            </View>
            {/* {data.map((datas, index) => (
              <View style={DashboardStyles.profileTextview} key={index}>
                <Text>{datas.Name}</Text>
                <Text>{datas.Holder}</Text>
              </View>
            ))} */}
          </Card.Content>
        </Card>
        <Text style={DashboardStyles.featureTextStyle}>{Header}</Text>
        <SmartSoftColumns isMultiline={true}>
         
            <SmartSoftColumn width={6}>
              <View style={DashboardStyles.featureview}>
                <Card style={DashboardStyles.featureCard}>
                  <Card.Content>
                    <View style={DashboardStyles.featureCardView}>
                      <Image
                        style={DashboardStyles.MonitoringImage}
                        source={imagelink}
                        // onPress={() => navigation.navigate('live-monitoring')} // Use navigation here directly
                      />
                      <Text style={DashboardStyles.MonitoringText}>
                        {imagename}
                      </Text>
                    </View>
                  </Card.Content>
                </Card>
              </View>
            </SmartSoftColumn>
        
        </SmartSoftColumns>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
