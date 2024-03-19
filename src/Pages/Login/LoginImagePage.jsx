import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import LoginStyles from "../../Styles/LoginStyles";
import TextStyles from "../../Styles/TextStyles";
import { MAIN } from "../../Services/ImageServices";


const LoginImagePage = () => {
  return (
    <>
      <SafeAreaView style={LoginStyles.safeView}>
        <View>
          <Text style={TextStyles.Title}>SURAKSHIT SAFAR</Text>
          <Image style={styles.login} source={MAIN}></Image>
        </View>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  login: {
    height: 350,
    width: 350,
  },
});

export default LoginImagePage;
