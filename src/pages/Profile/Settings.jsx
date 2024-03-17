import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Switch,
} from "react-native";
import { Button, Card } from "react-native-paper";
import SmartPin from "soft_digi_native/dist/forms/SmartPin";
import { SafeAreaView } from "react-native-safe-area-context";
import { BLUE_SCROLL, PIN_CHANGE_IMAGE } from "../../Service/imageservices";
import { SmartSoftButton } from "soft_digi_native";

const handleInputChange = (name, value) => {
  //console.log(" name " ,name , "   value " , value)
  setFormData((prev) => ({ ...prev, [name]: value }));
};

const Setting = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View>
          <Image style={styles.scrollimage} source={BLUE_SCROLL}></Image>
          <Text style={styles.pintext}>Pin Change</Text>
        </View>

        <View>
          <Card style={styles.card}>
            <Card.Content style={styles.cardcontent}>
              <Image
                style={styles.pinchangeimage}
                source={PIN_CHANGE_IMAGE}
              ></Image>
              <Text style={styles.curpintext}>Current Pin</Text>
              <SmartPin onChange={(value) => handleInputChange("pin", value)} />
              <Text style={styles.curpintext}>New Pin</Text>
              <SmartPin onChange={(value) => handleInputChange("pin", value)} />
              <Text style={styles.curpintext}>Confirm Pin</Text>
              <SmartPin onChange={(value) => handleInputChange("pin", value)} />
              <SmartSoftButton
                label="Update"
                type="contained"
                style={{ marginTop: 20 }}
              />
            </Card.Content>
          </Card>

          <Card style={styles.cardtwo}>
            <Card.Content style={styles.cardcontentwo}>
              <Text style={styles.catdtwotext}>Communication Preferences</Text>

              <View style={styles.switch}>
                <Text style={styles.catdtwotext}>App Notifications</Text>
                <Switch />
              </View>
              <View style={styles.switch}>
                <Text style={styles.catdtwotext}>SMS</Text>
                <Switch />
              </View>
              <View style={styles.switch}>
                <Text style={styles.catdtwotext}>Email</Text>
                <Switch />
              </View>
              <SmartSoftButton
                label="Save"
                type="contained"
                style={{ marginTop: 20 }}
              />
            </Card.Content>
          </Card>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollimage: {},
  pintext: {
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    padding: 15,
  },
  card: {
    height: 510,
    width: "100%",
    marginTop: 20,
  },
  pinchangeimage: {
    height: 165,
    width: 165,
    marginLeft: 90,
  },
  curpintext: {
    marginTop: 15,
    fontWeight: "bold",
    fontSize: 18,
  },
  cardtwo: {
    height: 260,
    width: "100%",
    marginTop: 20,
  },
  catdtwotext: {
    fontWeight: "bold",
    fontSize: 18,
  },
  switch:{
    justifyContent:"space-between",
    flexDirection:"row",
    marginTop:20
  },
});

export default Setting;
