import React from "react";
import { SafeAreaView, View } from "react-native";
import { SmartSoftColumn } from "soft_digi_native";
import DetailCard from "./DetailCard";
import { Card } from "react-native-paper";

const ExampleDetailCard = () => {
  const data = [
    { title: "Vehicle No", description: "" },
    { title: "Owner Name", description: "" },
    { title: "Device ICCID", description: "" },
    { title: "Device IMEI", description: "" },
    { title: "Alert Time", description: "" },
    { title: "Alert Types", description: "" },
    { title: "Dealer Name", description: "" },
    { title: "Rto Name", description: "" },
    { title: "Device Mfg.", description: "" },
    { title: "Location Point", description: "" },
    { title: "Location", description: "" },
    { title: "Action", description: "" },
    { title: "Mobile No", description: "" },
    { title: "Remarks", description: "" },
    { title: "Submit", description: "" },
  ];
  return (
    <>
    <SafeAreaView style={{backgroundColor:"#e3e3e3"}}>
    <View style={{margin:10,}}>
      <Card style={{backgroundColor:"white"}} >
        {data.map((item, index) => {
          return (
            <SmartSoftColumn key={index}>
              <DetailCard title={item.title} description={item.description} />
            </SmartSoftColumn>
          );
        })}
      </Card>
      </View>
      </SafeAreaView>
    </>
  );
};

export default ExampleDetailCard;
