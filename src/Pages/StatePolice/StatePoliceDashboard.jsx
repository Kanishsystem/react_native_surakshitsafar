import React from "react";
import { SafeAreaView, View, Text, Image } from "react-native";
import { Card } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  SmartSoftButton,
  SmartSoftColumn,
  SmartSoftColumns,
} from "soft_digi_native";
import HeaderComponent from "../../Components/HeaderComponent";
import ButtonStyles from "../../Styles/ButtonStyles";
import CardStyles from "../../Styles/CardStyles";
import TextStyles from "../../Styles/TextStyles";
import ImageStyles from "../../Styles/ImageStyles";
import {  EMERGENCY_ALERT, MONITORING_PERMIT, OWNER_VEHICLE, SEARCHER_IMAGE } from "../../Services/Imageservices";


const TwoButtons = () => {
  const data = [
    {
      Titleone: "Total Emergency Alerts",
      Titletwo: "**********",
      Descriptionone: "Resolve Alerts",
      Descriptiontwo: "**********",
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
      Description: "State Police",
    },

    {
      Name: "Station NAme",
      Holder: "StatePolice ",
    },
    {
      Name: "Email",
      Holder: "statepolice12@gmail.com",
    },
    {
      Name: "Contact No",
      Holder: "9876543210",
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
    { imagename: "Live Tracking", imagelink: MONITORING_PERMIT },
    { imagename: "Emergency Alert", imagelink:  EMERGENCY_ALERT},
    { imagename: "Vehicle Owner Details", imagelink: OWNER_VEHICLE },
    { imagename: "Update Investigation", imagelink: SEARCHER_IMAGE },
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
const StatePoliceDashboards = () => {
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

export default StatePoliceDashboards;
