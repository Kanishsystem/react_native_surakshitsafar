import React from "react";
import { SmartSoftColumn, SmartSoftColumns } from "soft_digi_native";
import TextStyles from "../Styles/TextStyles";
import TextBox from "../Styles/TextBox";
import { Card } from "react-native-paper";
import { StyleSheet, Text } from "react-native";

const DetailSeperateCards = ({ title, description }) => {
  return (
    <Card style={{marginVertical:5}}>
      <Card.Content style={{}}>
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
      </Card.Content>
    </Card>
  );
};
const styles = StyleSheet.create({
    inputDescription: {
      fontSize:20,
      padding:6
      // display:"flex",
      // alignContent:"flex-start",
      // justifyContent:"flex-start",
      // alignContent:"center"
    },
  });

export default DetailSeperateCards;
