import React from "react";
import { Text, View } from "react-native";
import ButtonStyles from "../Styles/ButtonStyles";
import TextStyles from "../Styles/TextStyles";

const ReportCard = () => {
  return (
    <View style={ButtonStyles.bluebutton} width={12} key="BlueCard-align">
      <Text style={TextStyles.bluecard}>One</Text>
      <Text style={TextStyles.bluecard}>Two</Text>
    </View>
  );
};

export default ReportCard;
