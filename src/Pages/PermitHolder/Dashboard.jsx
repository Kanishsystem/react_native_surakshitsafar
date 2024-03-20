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
import { DRIVERS_PERMIT, MONITORING_PERMIT, VEHICLE_PERMIT, VIOLATION_PERMIT } from "../../Services/Imageservices";

const Dashboard = () => {
  const data = [
    { Name: "User Name", Holder: "senso_permit@gmail.com" },
    { Name: "First Name", Holder: "sensom permit" },
    { Name: "Email", Holder: "senso_permit@gmail.com" },
    { Name: "Contact No", Holder: "6350529929" },
  ];

  const FeatureData = [
    { Name: "Monitoring", image: MONITORING_PERMIT },
    { Name: "Permit Violation", image: VIOLATION_PERMIT },
    { Name: "Drivers On Duty", image: DRIVERS_PERMIT},
    { Name: "Vehicle History", image: VEHICLE_PERMIT },
  ];
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
            <View style={DashboardStyles.buttonview}>
              <SmartSoftButton
                label="Total Vehicle"
                type="contained"
                style={DashboardStyles.button}
                width={6}
              />
              <SmartSoftButton
                label="Running Vehicle"
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
              <Text style={DashboardStyles.profileText}>Profile</Text>
              <Text style={DashboardStyles.profileText}>Permit Holder</Text>
            </View>
            {data.map((datas, index) => (
              <View style={DashboardStyles.profileTextview} key={index}>
                <Text>{datas.Name}</Text>
                <Text>{datas.Holder}</Text>
              </View>
            ))}
          </Card.Content>
        </Card>
        <Text style={DashboardStyles.featureTextStyle}>Features</Text>

        

          <SmartSoftColumns isMultiline={true} >
          {FeatureData.map((data, indexes) => (
            <SmartSoftColumn width={6}>
          
              <View
                style={DashboardStyles.featureview}
                key={indexes}
                
              >
                <Card style={DashboardStyles.featureCard}>
                  <Card.Content>
                    <View style={DashboardStyles.featureCardView}>
                      <Image
                        style={DashboardStyles.MonitoringImage}
                        source={data.image}
                      ></Image>
                      <Text style={DashboardStyles.MonitoringText}>
                        {data.Name}
                      </Text>
                    </View>
                  </Card.Content>
                </Card>
              </View>
             
            </SmartSoftColumn>
               ))}
          </SmartSoftColumns>
      


      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
