import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import TextStyles from "../../../styles/TextStyles";
import SmartColumn from "soft_digi_native/dist/general/SmartColumn";
import { CLAIM_MISSING_CROPS_LOGO } from "../../../Service/imageservices";
import {
  SmartSoftButton,
  SmartSoftForm,
  SmartSoftInput,
} from "soft_digi_native";

const ClaimMissingCrops = () => {
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
      name: "text-4",
      element: {
        label: "Invoice Number*",
        placeHolder: "Enter Invoice Number",
      },
    },

    {
      type: "TEXT_BOX",
      width: 12,
      name: "text-5",
      element: {
        label: "Business Name*",
        placeHolder: "Select Business Name",
      },
    },

    {
      type: "TEXT_BOX",
      width: 12,
      name: "text-6",
      element: {
        label: "Date of Invoice*",
        placeHolder: "DD/MM/YYYY",
      },
    },

    {
      type: "TEXT_BOX",
      width: 12,
      name: "text-7",
      element: {
        label: "Reasons for missing claim",
        placeHolder: "Reason",
      },
    },
  ];

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.ViewContainer}>
            <Text style={TextStyles.subTitle}>Claim Missing CROPs</Text>
            <SmartColumn width={9} key={"ClaimMissingCropsFistColumn"}>
              <Image
                style={styles.cliamMissingCropsImage}
                source={CLAIM_MISSING_CROPS_LOGO}
              ></Image>
            </SmartColumn>

            <SmartSoftForm
              formData={formData}
              setFormData={handleInputChange}
              elements={formElements}
              formSubmit={formSubmit}
              handleErrorChange={handleErrorChange}
            />

            <SmartSoftButton label="Submit" type="contained" fullWidth={true} />

            <SmartSoftButton
              label="Upload of Invoice"
              type="contained"
              fullWidth={true}
              style={{ marginTop: 10 }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  ViewContainer: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  cliamMissingCropsImage: {
    height: 200,
  },
});

export default ClaimMissingCrops;
