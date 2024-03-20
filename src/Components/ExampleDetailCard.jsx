import React from "react";
import FormFetchData from "./DetailCard";
import { View } from "react-native";
import { SmartSoftColumn } from "soft_digi_native";
import DetailCard from "./DetailCard";

const ExampleDetailCard = () => {
  const data = [
    { title: "Vehicle No", description: "" },
    { title: "Owner Name", description: "Senso Permit" },
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
      <View>
        {data.map((item, index) => {
          return (
            //  <View key={index}>
            <SmartSoftColumn key={index}>
              <DetailCard
                title={item.title}
                description={item.description}
              />
            </SmartSoftColumn>
            //  </View>
          );
        })}
      </View>
    </>
  );
};

export default ExampleDetailCard;
