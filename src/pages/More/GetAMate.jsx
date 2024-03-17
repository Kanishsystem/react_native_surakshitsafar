import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
} from "react-native";
import TextStyles from "../../styles/TextStyles";
import { GETAMATE } from "../../Service/imageservices";
import { SmartSoftButton, SmartSoftForm } from "soft_digi_native";

const GetAMate = () => {
  const [formData, setFormData] = useState({});
  const [formSubmit, setFormSubmit] = useState(false);

  const handleInputChange = (name, value) => {
    //console.log(" name " ,name , "   value " , value)
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleErrorChange = (name, value) => {
    setFormErrors((prev) => {
      // Create a copy of the previous state
      const updatedFormData = { ...prev };
      // Check if the value is null or empty
      if (value === null || value === "") {
        // If true, remove the property from the updated state
        delete updatedFormData[name];
      } else {
        // Otherwise, update or add the property in the updated state
        updatedFormData[name] = value;
      }

      return updatedFormData;
    });
  };

  const formElements = [
    {
      type: "TEXT_BOX",
      width: 12,
      name: "mobile_no",
      element: {
        label: "Mobile Number",
      },
    },
    {
      type: "TEXT_BOX",
      width: 12,
      name: "email",
      element: {
        label: "Email Address",
      },
    },
  ];
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.Viewcontainer1}>
            <Text style={TextStyles.subTitle}>Get a mate</Text>
            <Image style={styles.getamateimage} source={GETAMATE}></Image>

            <SmartSoftForm
              formData={formData}
              setFormData={handleInputChange}
              elements={formElements}
              formSubmit={formSubmit}
              handleErrorChange={handleErrorChange}
            />

            <SmartSoftButton label="Submit" type="contained" fullWidth={true} />
          </View>
        </ScrollView>
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
  getamateimage: {
    height: 194,
    // width: 290,
    // marginLeft: 100,
    // marginTop: 10,
  },
});

export default GetAMate;
