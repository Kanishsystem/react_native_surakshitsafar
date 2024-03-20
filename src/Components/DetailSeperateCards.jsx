import React from "react";
import { SmartSoftColumn, SmartSoftColumns } from "soft_digi_native";
import TextStyles from "../Styles/TextStyles";
import TextBox from "../Styles/TextBox";
import { Card } from "react-native-paper";
import { StyleSheet, Text } from "react-native";

const DetailSeperateCards = ({ title, description }) => {
  return (
    <Card>
      <Card.Content style={{}}>
        <SmartSoftColumns>
          <SmartSoftColumn width={6}>
            <Text style={TextStyles.detailsTitle}>{title}</Text>
          </SmartSoftColumn>
          <SmartSoftColumn width={6}>
            <Text style={[TextBox.InputBox, styles.inputDescription]}>
              {description}
            </Text>
          </SmartSoftColumn>
        </SmartSoftColumns>
      </Card.Content>
    </Card>
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

export default DetailSeperateCards;
