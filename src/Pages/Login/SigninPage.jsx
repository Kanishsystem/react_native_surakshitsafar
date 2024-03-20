import React from "react";

import LoginImagePage from "./LoginImagePage";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import TextStyles from "../../Styles/TextStyles";
import LoginStyles from "../../Styles/LoginStyles";

import { Card } from "react-native-paper";
import { SmartSoftButton, SmartSoftForm } from "soft_digi_native";
import ContainerStyles from "../../Styles/ContainerStyles";
import SmartColumn from "soft_digi_native/dist/general/SmartColumn";

const SigninPage = () => {
  return (
    <>
      <SafeAreaView style={LoginStyles.safeView}>
        <View>
          <Text style={TextStyles.Title}>SURAKSHIT SAFAR</Text>
          <SmartColumn width={12} key={"Signinpagefirstcolumn"}>
            <Image style={styles.login} source={MAIN}></Image>
          </SmartColumn>
        </View>

        <Card style={{ width: "95%" }}>
          <Card.Content style={[ContainerStyles.flexVerticleBox]}>
            <SmartColumn width={5} key={"Signinpagesecondcolumn"}>
              <Image style={styles.user} source={USER}></Image>
            </SmartColumn>

            <SmartSoftButton
              label="User Sign In"
              type="text"
              style={styles.button}
            />
          </Card.Content>
        </Card>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  login: {
    height: 300,
  },
  user: {
    height: 145,
  },
});

export default SigninPage;
