import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import SmartColumn from "soft_digi_native/dist/general/SmartColumn";
import { MYPROFILE_LOGO } from "../../Service/imageservices";
import { SmartSoftButton, SmartSoftForm } from "soft_digi_native";
import SmartCheckRadio from "soft_digi_native/dist/forms/SmartCheckRadio";

const MyProfile = () => {
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

  const MyOfferSwitch = () => {
    const Customer_Data = [{ value: "1", label: "Market Notification" }];
    const Business_Data = [{ value: "2", label: "Newsletter" }];
    return (
      <>
        <SmartCheckRadio
          options={Customer_Data}
          switchMode="true"
          isRight={true}
          name="switchone"
          // value={category}
          // onChange={(value) => setCategory("1")}
        />
        <SmartCheckRadio
          options={Business_Data}
          switchMode="true"
          isRight={true}
          name="switchone"
          // value={category}
          // onChange={(value) => setCategory("1")}
        />
      </>
    );
  };

  const options = [
    { value: "1", label: "Male" },
    { value: "2", label: "Female" },
    { value: "3", label: "Not Specified" },
  ];

  const formElements = [
    {
      type: "TEXT_BOX",
      width: 12,
      name: "first_name",
      element: {
        label: "First Name",
        placeHolder: "veerahema",
      },
    },
    {
      type: "TEXT_BOX",
      width: 12,
      name: "middle_name",
      element: {
        label: "Middle Name",
        placeHolder: "aishu",
      },
    },
    {
      type: "TEXT_BOX",
      width: 12,
      name: "last_name",
      element: {
        label: "Last Name",
        placeHolder: "kumar",
      },
    },
    {
      type: "TEXT_BOX",
      width: 12,
      name: "age",
      element: {
        label: "Date of Birth",
        placeHolder: "02/05/1995",
      },
    },
    {
      type: "TEXT_BOX",
      width: 12,
      name: "age_group",
      element: {
        label: "Age Group",
        placeHolder: "26 - 35",
      },
    },
    {
      type: "TEXT_BOX",
      width: 12,
      name: "email",
      element: {
        label: "Email",
        placeHolder: "veerahema.k@gmail.com",
      },
    },
    {
      type: "TEXT_BOX",
      width: 12,
      name: "mobile_number",
      element: {
        label: "Mobile Number",
        placeHolder: "",
      },
    },
    {
      type: "TEXT_BOX",
      width: 12,
      name: "addr_one",
      element: {
        label: "Address Line1",
        placeHolder: "ABC",
      },
    },
    {
      type: "TEXT_BOX",
      width: 12,
      name: "addr_two",
      element: {
        label: "Address Line2",
        placeHolder: "ABC",
      },
    },
    {
      type: "TEXT_BOX",
      width: 12,
      name: "addr_three",
      element: {
        label: "Address Line3",
        placeHolder: "ABC",
      },
    },
    {
      type: "TEXT_BOX",
      width: 12,
      name: "state",
      element: {
        label: "State",
        placeHolder: "Queensland",
      },
    },
    {
      type: "TEXT_BOX",
      width: 12,
      name: "pincode",
      element: {
        label: "Pincode",
        placeHolder: "123456",
      },
    },

    {
      type: "CHECK_RADIO",
      width: 12,
      name: "input_three",
      element: {
        label: "Gender",
        options: options,
        type: "radio",
        isMulti: true,

        // validations: formValidations.input_one,
      },
    },
    {
      type: "TEXT_BOX",
      width: 12,
      name: "loyalty_program",
      element: {
        label: "Loyalty Program",
        placeHolder: "Select Loyalty Program",
      },
    },
    {
      type: "TEXT_BOX",
      width: 12,
      name: "interest",
      element: {
        label: "Interest",
        placeHolder: "Select Interest",
      },
    },
  ];
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.ViewContainer}>
            <SmartColumn width={7} key={"MyProfileFistColumn"}>
              <Image
                style={styles.myProfileLogo}
                source={MYPROFILE_LOGO}
              ></Image>
            </SmartColumn>

            <SmartSoftForm
              formData={formData}
              setFormData={handleInputChange}
              elements={formElements}
              formSubmit={formSubmit}
              handleErrorChange={handleErrorChange}
            />
            <SmartColumn key={"MyProfileSecondcolumn"} style={{}}>
              {MyOfferSwitch()}
            </SmartColumn>

            <SmartSoftButton
              label="Submit"
              type="contained"
              style={{}}
              fullWidth={true}
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
  myProfileLogo: {
    height: 170,
  },
});

export default MyProfile;
