import React,{useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Image,
  TextInput,
  Button,
} from "react-native";

import {  CROP_LOGO, FORGOTIMAGE } from "../../Service/imageservices";
import { SmartSoftButton, SmartSoftForm } from "soft_digi_native";
import SmartColumns from "soft_digi_native/dist/general/SmartColumns";
import SmartColumn from "soft_digi_native/dist/general/SmartColumn";
import TextStyles from "../../styles/TextStyles";
import LoginStyles from "../../styles/LoginStyle";

const ForGot = () => {

  const [formData, setFormData] = useState({text_one:"ffsdfsdf",input_three:""});
  const [formSubmit, setFormSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState(false);
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
  const options = [
    { value: "1", label: "CROP ID" },
    { value: "2", label: "Mobile" },
    { value: "3", label: "Email" },   
  ];

  const formElements = [
    
    {
      type:"CHECK_RADIO",
      width: 12,
      name: "input_three",
      element: {
      //  label: "Enter Name",
        options:options,
        type:"radio",
        isMulti:true
        // validations: formValidations.input_one,
      },
    },
    {
      type: "TEXT_BOX",
      width: 12,
      name: "input_one",
      element: {
        label: "Enter CROP ID",
        // validations: formValidations.input_one,
      },
    },
    /*
    {
      type: "BUTTON",
      width: 12,
      element: {
        label: "Submit",
        type: "contained",
      },
    },*/
  ];
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.container1}>
          <Image style={styles.croplogo} source={CROP_LOGO}></Image>
          <Image style={styles.login} source={FORGOTIMAGE}></Image>

          <Text style={TextStyles.subTitle}>Forgot Pin?</Text>


          <Text style={styles.text1}>
          Enter Your details to request pin reset.
          </Text>


           <SmartSoftForm
            formData={formData}
            setFormData={handleInputChange}
            elements={formElements}
            formSubmit={formSubmit}
            handleErrorChange={handleErrorChange}
          />

           
          <SmartSoftButton label="Send Mail" type="contained" style={{marginTop:20}} />


          <SmartColumns style={LoginStyles.smartcolumn} isMultiline={true} key="Forgot" >
           
            <SmartColumn width={0} key="Forgot_two" ><Text style={{color:"blue"}}> Back to LogIn</Text></SmartColumn>           
          </SmartColumns>

          {/* <View style={styles.text2}>
            <Text>CROP ID</Text>
            <Text>Mobile</Text>
            <Text>Email</Text>
          </View>
          <TextInput
            style={styles.text3}
            placeholder="    Please enter CROP ID"
          ></TextInput>

          <View style={styles.text5}>
            <Text>Remember me</Text>
            <Text style={styles.color}>Forgot Pin?</Text>
          </View>
          <View style={styles.button}>
            <Button title="Login" />
          </View>
          <View style={styles.text6}>
            
            <Text style={styles.colors}> Sign up now</Text>
          </View> */}
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "black",
  
  },

  container1: {
    padding:10
  },

  croplogo: {
    height: 64,
    width: 137,
    
    marginLeft: 100,
    // marginTop: 10,
  },

  login: {
    height: 194,
    width: 194,
    marginTop: 30,
    marginLeft: 80,
  },

  text: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 140,
    marginTop: 7,
  },

  text1: {
    marginTop: 20,
    marginLeft: 27,
  },

  
  text4: {
    color: "grey",
    backgroundColor: "white",
    height: 42,
    width: 320,
    marginLeft: 20,
    borderColor: "grey",
    borderWidth: 2,
    marginTop: 20,
    borderRadius: 8,
  },
  

  color: {
    color: "blue",
  },

  button: {
    marginTop: 20,
    width: 320,
    marginLeft: 20,
  },
  
  colors: {
    color: "blue",
  },
});

export default ForGot;
