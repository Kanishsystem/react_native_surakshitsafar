import React from 'react'
import HeaderComponent from '../../Components/HeaderComponent'
import { View } from 'react-native';
import { Card } from 'react-native-paper';
import CardStyles from '../../Styles/CardStyles';
import { SmartSoftColumn } from 'soft_digi_native';
import DetailSeperateCards from '../../Components/DetailSeperateCards';

const DeviceDetails = () => {
    const data = [
        { title: "Owner Name", description: "Rahul Bhatia" },
        { title: "Contact No", description: "9467292954" },
        { title: "Device Mfg", description: "SensoManuf" },
        { title: "Dealer Name", description: "Deepak Kumar" },
        { title: "RTO Name", description: "HR26" },
        { title: "Vehicle No", description: "HR26TB6957" },
        { title: "Chassis No", description: "MA3EWAB1SOCA00675" },
        { title: "Device IMEI", description: "862818049020383" },
        { title: "Device ICCID", description: "89910473051906078550" },
        { title: "Device UIN", description: "RA10V21072000016756" },
        { title: "N/w Provider", description: "Sensorise" },
        { title: "Today`s Status", description: "" },
      ];
  return (
    <>
    <HeaderComponent Title="Device Details"/>
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
  )
}

export default DeviceDetails