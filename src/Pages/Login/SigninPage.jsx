import React from "react";

import LoginImagePage from "./LoginImagePage";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import TextStyles from "../../Styles/TextStyles";
import LoginStyles from "../../Styles/LoginStyles";

import { Card } from "react-native-paper";
import { SmartSoftButton, SmartSoftForm } from "soft_digi_native";
import { MAIN, USER } from "../../Services/ImageServices";


const SigninPage = () => {
  return (
    <>
      <SafeAreaView style={LoginStyles.safeView}>
        <View>
          <Text style={TextStyles.Title}>SURAKSHIT SAFAR</Text>
          <Image style={styles.login} source={MAIN}></Image>
        </View>

        <Card>
          {/* <LinearGradient
            style={styles.cardlineargradient}
          > */}
            <Card.Content style={styles.card}>
              <View>
                <Image style={styles.user} source={USER}></Image>
              </View>

              <SmartSoftButton
                label="User Sign In"
                type="text"
                style={styles.button}
              />
            </Card.Content>
          {/* </LinearGradient> */}
        </Card>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  login: {
    height: 400,
    width: 400,
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: 250,
    width: 380,
  },

  user: {
    height: 150,
    width: 150,
  },
 
//   cardlineargradient:{
   
//     backgroundColor:"transparent"
//   }
});

export default SigninPage;
