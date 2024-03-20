import React from "react";
import HeaderComponent from "../../Components/HeaderComponent";
import { View } from "react-native";
import { Card } from "react-native-paper";
import CardStyles from "../../Styles/CardStyles";
import { SmartSoftColumn } from "soft_digi_native";
import DetailSeperateCards from "../../Components/DetailSeperateCards";
import SmartInput from "soft_digi_native/dist/forms/SmartInput";

const HelpDesk = () => {
  const data = [
    { title: "Chassis No", description: "MLU629627LUY90987" },
    { title: "Engine No", description: "EV618K67876" },
    { title: "Device IMEI", description: "862493050350853" },
    { title: "Device Sr.No", description: "39" },
    { title: "Device UIN", description: "RA10V21122200036347" },
    { title: "Company Name", description: "SensoManuf" },
    { title: "Dealer Name", description: "SensoDealer" },
    { title: "Owner Name", description: "Adesh Sharma" },
    { title: "Contact No", description: "8826085103" },
    { title: "Email", description: "adesh.sharma@rosmertatech.com" },
    { title: "Date&Time", description: "2023-12-08 09:45:40" },
  ];
  return (
    <>
      <HeaderComponent Title="Help Desk" />
      <View style={{ margin: 10 }}>
        <Card style={CardStyles.cardColor}>
          <SmartInput
            type="Text_Box"
            label="Select vehicle Number"
            placeHolder="HR26KR9681"
            style={{ margin: 10 }}
          />

          {data.map((item, index) => {
            return (
                <DetailSeperateCards
                  title={item.title}
                  description={item.description}
                  key={index}
                />
             
            );
          })}
        </Card>
      </View>
    </>
  );
};
export default HelpDesk;
