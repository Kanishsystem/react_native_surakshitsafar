import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Alert,
} from "react-native";

import {
  CROPLOGO,
  CROP_LOGO,
  LOGINIMAGE,
  LOGIN_IMAGE,
} from "../../Service/imageservices";
import { SmartSoftButton, SmartSoftForm } from "soft_digi_native";
import SmartColumns from "soft_digi_native/dist/general/SmartColumns";
import SmartColumn from "soft_digi_native/dist/general/SmartColumn";
import TextStyles from "../../styles/TextStyles";
import SmartPin from "soft_digi_native/dist/forms/SmartPin";
import ComStyles from "../../styles/ComStyles";
import {isEmptyObject} from "../../Service/Core/CommonService"
import { useSiteContext } from "../../contexts/SiteProvider";
import {ADMIN_LOGIN_URLS} from "../../api/AuthUrl";
import { post } from "../../Service/smartApiService";


const Login = ({ navigation }) => {
  const { setLoading, setUser } = useSiteContext();
  const [formData, setFormData] = useState({
    text_one: "ffsdfsdf",
    input_three: "",
  });
  const [formSubmit, setFormSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState(false);
  const handleInputChange = (name, value) => {
    //console.log(" name " ,name , "   value " , value)
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBack = () => {
    navigation.navigate("home");
    console.log("Button Test");
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

  const handleLogin = () => {
    setFormSubmit(true);
    if (!isEmptyObject(formErrors)) {
      return false;
    }
    const handleError = (errorMessage) => {
      console.log(errorMessage);
      navigation.navigate("main");
     // showAlertAutoClose(errorMessage, "error");
      setLoading(false);
    };
    setLoading(true, "Logging in Please Wait....");
    let url = ADMIN_LOGIN_URLS.LOGIN_CUSTOMER;
    const subscription = post(url, formData, handleError, false).subscribe(
      (response) => {
       // showAlertAutoClose("Logged in Successfully", "success");
       // setLoading(false);
        setUser(response.data);
        navigation.navigate("main");
      }
    );
    return () => {
      subscription.unsubscribe();
    };
    

  //  console.log("dialog over");
    //navigation.navigate("main");
  };

  const options = [
    { value: "1", label: "CROP ID" },
    { value: "2", label: "Mobile" },
    { value: "3", label: "Email" },
  ];

  const formElements = [
    {
      type: "CHECK_RADIO",
      width: 12,
      name: "input_three",
      element: {
        //  label: "Enter Name",
        options: options,
        type: "radio",
        isMulti: true,
        // validations: formValidations.input_one,
      },
    },
    {
      type: "TEXT_BOX",
      width: 12,
      name: "input_one",
      element: {
        label: "Enter Name",
        // validations: formValidations.input_one,
      },
    },
  ];

  const remember_me = () => {
    return (
      <SmartColumns style={{ marginTop: 10 }} isMultiline={true} key="forgot">
        <SmartColumn width={6} key="forgot_one">
          <Text>Remeber Me</Text>
        </SmartColumn>
        <SmartColumn width={6} key="forgot_two">
          <Text> Forgot Pin ?</Text>
        </SmartColumn>
      </SmartColumns>
    );
  };

  const topLogoImage = () => {
    return (
      <>
        <Image style={styles.croplogo} source={CROP_LOGO}></Image>
        <Image style={styles.login} source={LOGIN_IMAGE}></Image>
        <Text style={TextStyles.subTitle}>Login</Text>
        <Text style={styles.text1}>
          Your access to a world of offers and rewards{" "}
        </Text>
      </>
    );
  };

  const signUp = () => {
    return (
      <SmartColumns style={{}} isMultiline={true} key="signup">
        <SmartColumn width={0} key="signup_one">
          <Text>Not a member?</Text>
        </SmartColumn>
        <SmartColumn width={0} key="signup_two">
          <Text style={{ color: "blue" }}> Sign up now</Text>
        </SmartColumn>
      </SmartColumns>
    );
  };

  const loginForm = () => {
    return (
      <View>
        <SmartSoftForm
          formData={formData}
          setFormData={handleInputChange}
          elements={formElements}
          formSubmit={formSubmit}
          handleErrorChange={handleErrorChange}
        />
        <SmartPin onChange={(value) => handleInputChange("pin", value)} />
        {remember_me()}
        <SmartSoftButton
          label="Login"
          type="contained"
          style={{ marginTop: 20 }}
          onClick={() => handleLogin()}
        />
      </View>
    );
  };

  return (
    <>
      <SafeAreaView style={ComStyles.safeView}>
        <ScrollView>
          <View style={ComStyles.viewBlock}>
            <Image style={styles.croplogo} source={CROP_LOGO}></Image>
            <Image style={styles.login} source={LOGIN_IMAGE}></Image>
            <Text style={TextStyles.subTitle}>Login</Text>
            <Text style={styles.text1}>
              Your access to a world of offers and rewards{" "}
            </Text>
            {loginForm()}
            {signUp()}
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

  container1: {
    padding: 10,
  },

  croplogo: {
    height: 64,
    width: 137,
    marginLeft: 100,
    // marginTop: 10,
  },

  login: {
    height: 150,
    width: 250,
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

  text2: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 28,
  },

  text3: {
    color: "blue",
    backgroundColor: "white",
    height: 42,
    width: 320,
    marginLeft: 17,
    borderColor: "blue",
    borderWidth: 2,
    marginTop: 20,
    borderRadius: 8,
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
  text5: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },

  color: {
    color: "blue",
  },

  button: {
    marginTop: 20,
    width: 320,
    marginLeft: 20,
  },
  text6: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 30,
  },
  colors: {
    color: "blue",
  },
});

export default Login;
