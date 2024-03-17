import React from "react";
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
import { CROP_LOGO, MESSAGEBOX, } from "../../Service/imageservices";



const EmailPage = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.container1}>
          <Image style={styles.croplogo} source={CROP_LOGO}></Image>
          <Image style={styles.forgotmsg} source={MESSAGEBOX}></Image>
          <Text style={styles.text}>Email sent!</Text>
          <View style={styles.text1}>
            <Text>We have sent an Email</Text>
            <Text>with a link to reset your pin</Text>
          </View>
          <View style={styles.button}>
            <Button title="Back to Login" />
          </View>
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
    borderWidth:2,
    borderColor:"black",
  },

  container1: {},

  croplogo: {
    height: 64,
    width: 137,
    marginLeft: 105,
    marginTop: 10,
  },
  forgotmsg: {
    height: 230,
    width: 230,
    marginTop: 30,
    marginLeft: 57,
  },
  text: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 24,
    marginLeft: 110,
    marginTop: 7,
  },

  text1: {
    marginTop: 20,
    alignItems: "center",
  },

  button: {
    marginTop: 40,
    width: 330,
    marginLeft: 18,
    borderRadius: 10,
  },
});
export default EmailPage;
