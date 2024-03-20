import React from "react";
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import DashboardStyles from "../../Styles/DashboardStyles";
import ViewShot from "react-native-view-shot";
import { SmartSoftButton, SmartSoftInput } from "soft_digi_native";
import SmartColumn from "soft_digi_native/dist/general/SmartColumn";
import SmartButton from "soft_digi_native/dist/forms/SmartButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import LoginImagePage from "../Login/LoginImagePage";

const TransportCapture = () => {
  //  captureScreen = () => {
  // this.viewShot.capture().then(uri => {
  // uri is the path to the captured image
  //   console.log('Image saved to', uri);
  // You can now do something with the captured image, such as saving it to the device or displaying it in an Image component
  // });
  //   };
  const loginFormSelectBox = () => {
    return (
      <>
        <SmartSoftInput
          type="Text_Box"
          label="Select Vechile Type"
          //    placeHolder="Select Vechile Type"
        />
      </>
    );
  };

  const loginFormInputForm = () => {
    return (
      <>
        <SmartSoftInput
          type="Text_Box"
          label="Enter Vehicle Number"
          leftIcon="account-child"
          //    placeHolder="Enter Vehicle Number"
        />
        <SmartSoftInput
          type="Text_Box"
          label="Enter Contact Number"
          //  placeHolder="Enter Contact Number"
        />
      </>
    );
  };

  const LocationInputForm = () => {
    return (
      <>
        <SmartSoftInput type="Text_Box" placeHolder="12.5573123" />
        <SmartSoftInput type="Text_Box" placeHolder="80.1288434" />
        <SmartSoftInput type="Text_Box" label="Enter Location Name(Optional)" />
        <SmartSoftInput type="Text_Box" label="Comment:" />
        <SmartButton
          label="Submit"
          buttonColor="#0a4b43"
          textColor="white"
          style={{ marginTop: 10 }}
        />
      </>
    );
  };
  return (
    <>
      <SafeAreaView style={DashboardStyles.container}>
        <ScrollView>
          <View style={DashboardStyles.headerstyle}>
            <View style={DashboardStyles.HeadTexrStyle}>
              <Text style={DashboardStyles.Textstyle}>SURAKSHIT SAFAR</Text>
            </View>
          </View>
          {/* <ViewShot ref={(ref) => (this.viewShot = ref)}> */}
          {/* Your content here */}
          {/* </ViewShot> */}
          {/* <Button title="Capture" onPress={this.captureScreen} /> */}
          <SmartSoftButton
            label="CAPTURE"
            buttonColor="#0a4b43"
            textColor="white"
            style={{ marginTop: 10, height: 50 }}
          />
          <SmartColumn width={12}>{loginFormSelectBox()}</SmartColumn>
          <SmartColumn width={12}>{loginFormInputForm()}</SmartColumn>
          <View style={styles.CurrentLocation}>
            <MaterialCommunityIcons
              name="google-maps"
              color={"green"}
              size={25}
            />
            Current Location
          </View>
          <SmartColumn width={12} style={{ marginTop: 20 }}>
            {LocationInputForm()}
          </SmartColumn>
        </ScrollView>
      </SafeAreaView>
      
    </>
  );
};
const styles = StyleSheet.create({
  CurrentLocation: {
    borderWidth: 1,
    borderColor: "black",
    height: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default TransportCapture;
