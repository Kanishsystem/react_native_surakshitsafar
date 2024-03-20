import React from "react";
import { SafeAreaView, View, Text, Image } from "react-native";
import { Card } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  SmartSoftButton,
  SmartSoftColumn,
  SmartSoftColumns,
} from "soft_digi_native";
import HeaderComponent from "./HeaderComponent";
import ButtonStyles from "../Styles/ButtonStyles";
import CardStyles from "../Styles/CardStyles";
import TextStyles from "../Styles/TextStyles";
import ImageStyles from "../Styles/ImageStyles";
import {
  DRIVERS_PERMIT,
  MONITORING_PERMIT,
  VEHICLE_PERMIT,
  VIOLATION_PERMIT,
} from "../Services/Imageservices";

const TwoButtons = () => {
  const data = [
    {
      Titleone: "Total Vehicle",
      Titletwo: "1",
      Descriptionone: "Running Vehicle",
      Descriptiontwo: "0",
    },
  ];

  return (
    <Card style={CardStyles.cardView}>
      <Card.Content>
        {data.map((datas, index) => (
          <View style={ButtonStyles.buttonview}>
            <View style={ButtonStyles.button} width={6} key={index}>
              <Text style={TextStyles.fontcolor}>{datas.Titleone}</Text>
              <Text style={TextStyles.fontcolor}>{datas.Titletwo}</Text>
            </View>

            <View style={ButtonStyles.button} width={6} key="Buttontwo-align">
              <Text style={TextStyles.fontcolor}>{datas.Descriptionone}</Text>
              <Text style={TextStyles.fontcolor}>{datas.Descriptiontwo}</Text>
            </View>
          </View>
        ))}
      </Card.Content>
    </Card>
  );
};

const ProfileCard = () => {
  const Profileitem = [
    {
      Title: "Profile",
      Description: "Permit Holder",
    },

    {
      Name: "User Name",
      Holder: "senso_permit@gmail.com",
    },
    {
      Name: "First Name",
      Holder: "sensom Permit",
    },
    {
      Name: "Email",
      Holder: "senso_permit@gmail.com",
    },
    {
      Name: "Contact No",
      Holder: "6350529929",
    },
  ];

  return (
    <Card style={CardStyles.cardView}>
      {Profileitem.map((Profiledata, profileindex) => (
        <Card.Content>
          <View style={CardStyles.profilecardView} key={profileindex}>
            <Text style={TextStyles.profileText}>{Profiledata.Title}</Text>
            <Text style={TextStyles.profileText}>
              {Profiledata.Description}
            </Text>
          </View>

          <View style={TextStyles.profileTextview}>
            <Text>{Profiledata.Name}</Text>
            <Text>{Profiledata.Holder}</Text>
          </View>
        </Card.Content>
      ))}
    </Card>
  );
};

const FeaturesCard = ({ imagelink, imagename }) => {
  const Profileimage = [
    { imagename: "Monitoring", imagelink: MONITORING_PERMIT },
    { imagename: "Permit Violation", imagelink: VIOLATION_PERMIT },
    { imagename: "Drivers On Duty", imagelink: DRIVERS_PERMIT },
    { imagename: "Vehicle History", imagelink: VEHICLE_PERMIT },
  ];
  return (
    <SmartSoftColumns isMultiline={true}>
      {Profileimage.map((Profileimagedata) => (
        <SmartSoftColumn width={6}>
          <Card style={CardStyles.featureCard}>
            <Card.Content>
              <View style={CardStyles.featureCardView}>
                <Image
                  style={ImageStyles.FeatureImage}
                  source={Profileimagedata.imagelink}
                />
                <Text style={TextStyles.FeatureImageText}>
                  {Profileimagedata.imagename}
                </Text>
              </View>
            </Card.Content>
          </Card>
        </SmartSoftColumn>
      ))}
    </SmartSoftColumns>
  );
};
const PermitHolderDashboard = () => {
  return (
    <>
      <HeaderComponent Title="SURAKSHIT SAFAR"/>
      <View style={{ padding: 10 }}>
        <TwoButtons />
        <ProfileCard />
        <Text style={TextStyles.featureHeaderText}>Features</Text>
        <FeaturesCard />
      </View>
    </>
  );
};

export default PermitHolderDashboard;
