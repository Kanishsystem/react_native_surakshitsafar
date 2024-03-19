import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import LoginStyles from "../../Styles/LoginStyles";
import TextStyles from "../../Styles/TextStyles";

import { Card } from "react-native-paper";
import { SmartSoftButton, SmartSoftInput } from "soft_digi_native";
import SmartColumn from "soft_digi_native/dist/general/SmartColumn";
import SmartInput from "soft_digi_native/dist/forms/SmartInput";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ContainerStyles from "../../Styles/ContainerStyles";
import { MAIN } from "../../Services/ImageServices";

const UserSigninPage = () => {
  const loginFormSelectBox = () => {
    return (
      <>
        <SmartInput
          type="Text_Box"
          label="Select User Type"
          //    placeHolder="Enter Username"
        />
      </>
    );
  };

  const loginFormInputForm = () => {
    return (
      <>
        <SmartInput
          type="Text_Box"
          label="Enter UserName"
          leftIcon="account-child"
          //    placeHolder="Enter Username"
        />
        <SmartInput
          type="Text_Box"
          label="Enter Password"
          width="100"
          //  placeHolder=""
        />
        <SmartSoftButton label="Sign In" type="contained" fullWidth={true} />
      </>
    );
  };
  return (
    <>
      <SafeAreaView style={LoginStyles.safeView}>
        <View>
          <Text style={TextStyles.Title}>SURAKSHIT SAFAR</Text>
          <Image style={styles.login} source={MAIN}></Image>
        </View>
        <Card style={{ width: "95%" }}>
          <Card.Content
            style={[ContainerStyles.flexVerticleBox, styles.selectBox]}
          >
            {loginFormSelectBox()}
          </Card.Content>

          <Card.Content style={[ContainerStyles.flexVerticleBox]}>
            {loginFormInputForm()}
          </Card.Content>
        </Card>
        <SmartColumn width={11}>
          <SmartSoftButton
            label="Citizen Dashboard"
            type="contained"
            style={{ marginTop: 30 }}
          />
        </SmartColumn>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  login: {
    height: 400,
    width: 400,
  },
  selectBox: {
    height: 100,
   
  },
  loginBox: {},
});

export default UserSigninPage;
