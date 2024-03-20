import React from "react";
import { SafeAreaView, View, Text, Image } from "react-native";
import { Card } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SmartSoftButton, SmartSoftColumn, SmartSoftColumns } from "soft_digi_native";
import HeaderComponent from "./HeaderComponent";
import ButtonStyles from "../Styles/ButtonStyles";
import CardStyles from "../Styles/CardStyles";
import TextStyles from "../Styles/TextStyles";
import ImageStyles from "../Styles/ImageStyles";

const TwoButtons = ({ Labelone, Labeltwo }) => {
  return (
    <Card style={CardStyles.cardView}>
      <Card.Content>
        <View style={ButtonStyles.buttonview}>
          <SmartSoftButton
            label={Labelone}
            type="contained"
            style={ButtonStyles.button}
            width={6}
          />
          <SmartSoftButton
            label={Labeltwo}
            type="contained"
            style={ButtonStyles.button}
            width={6}
          />
        </View>
      </Card.Content>
    </Card>
  );
};

const ProfileCard = ({ Title, Description, Name, Holder,Header }) => {
  return (
    <Card style={CardStyles.cardView}>
      <Card.Content>
        <View style={CardStyles.profilecardView}>
          <Text style={TextStyles.profileText}>{Title}</Text>
          <Text style={TextStyles.profileText}>{Description}</Text>
        </View>

        <View style={TextStyles.profileTextview}>
          <Text>{Name}</Text>
          <Text>{Holder}</Text>
        </View>
        <Text style={TextStyles.featureHeaderText}>{Header}</Text>
      </Card.Content>
    </Card>
  );
};

const FeaturesCard = ({imagelink,imagename,}) => {
  return (
    <SmartSoftColumns isMultiline={true}>
      <SmartSoftColumn width={6}>
        <Card style={CardStyles.featureCard}>
          <Card.Content>
            <View style={CardStyles.featureCardView}>
              <Image
                style={ImageStyles.FeatureImage}
                source={imagelink}
              />
              <Text style={TextStyles.FeatureImageText}>{imagename}</Text>
            </View>
          </Card.Content>
        </Card>
      </SmartSoftColumn>
    </SmartSoftColumns>
  );
};
const AllDashboard = () => {
  return (
    <>
      <HeaderComponent />
      <TwoButtons />
      <ProfileCard />
      <FeaturesCard/>
    </>
  );
};

export default AllDashboard;
