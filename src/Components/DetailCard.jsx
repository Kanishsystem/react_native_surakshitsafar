import React from "react";
import { SafeAreaView, StyleSheet, Text, TextBase, View } from "react-native";
import { SmartSoftColumn, SmartSoftColumns } from "soft_digi_native";
import TextStyles from "../Styles/TextStyles";
import TextBox from "../Styles/TextBox";

const DetailCard = ({ title, description }) => {
  return (
    
    <SmartSoftColumns>
      <SmartSoftColumn width={4}>
        <Text style={TextStyles.detailsTitle}>{title}</Text>
      </SmartSoftColumn>
      <SmartSoftColumn width={8}>
        <Text style={[TextBox.InputBox, styles.inputDescription]}>
          {description}
        </Text>
      </SmartSoftColumn>
    </SmartSoftColumns>

  );
};
const styles = StyleSheet.create({
  inputDescription: {
    // display:"flex",
    // alignContent:"flex-start",
    // justifyContent:"flex-start",
    // alignContent:"center"
  },
});
export default DetailCard;
