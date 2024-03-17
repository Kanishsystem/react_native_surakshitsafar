import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import TextStyles from "../../styles/TextStyles";
import SmartInput from "soft_digi_native/dist/forms/SmartInput";
import { SmartSoftButton } from "soft_digi_native";

const Address = () => {
  const addressForm = () => {
    return (
      <>
        <SmartInput type="Text_Box" placeHolder="Enter Address Line1" />
        <SmartInput type="Text_Box" placeHolder="Enter Address Line2" />
        <SmartInput type="Text_Box" placeHolder="Enter Address Line3" />
        <SmartInput type="Text_Box" placeHolder="Select State" />
        <SmartInput type="Text_Box" placeHolder="Enter Pincode" />

        <SmartSoftButton
          label="Save"
          type="contained"
          style={{}}
          fullWidth={true}
        />
      </>
    );
  };
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.Viewcontainer1}>
          <Text style={TextStyles.subTitle}>Add Address</Text>
        </View>
        {addressForm()}
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 2,
    // borderColor: "black",
  },
  Viewcontainer1: {
    padding: 10,
  },
});

export default Address;
