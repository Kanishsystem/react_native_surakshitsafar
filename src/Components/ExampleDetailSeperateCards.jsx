import React from "react";
import { View } from "react-native";
import { SmartSoftColumn } from "soft_digi_native";
import DetailSeperateCards from "./DetailSeperateCards";
import CardStyles from "../Styles/CardStyles";
import { Card } from "react-native-paper";
import HeaderComponent from "./HeaderComponent";
import ExampleDetailCard from "./ExampleDetailCard";


const ExampleDetailSeperateCards = () => {
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
      <HeaderComponent />
       <View style={{margin:10,}}>
      <Card style={CardStyles.cardColor} >
        
          {data.map((item, index) => {
            return (
              <SmartSoftColumn key={index}>
                <DetailSeperateCards title={item.title} description={item.description} />
              </SmartSoftColumn>
            );
          })}
          </Card>
        </View>
      </>
    );
  };
  
  export default ExampleDetailSeperateCards;
  