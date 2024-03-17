//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native";
import { Button, Card, Icon } from "react-native-paper";

import {
  ABOUTUS,
  BELL,
  BLUE_SCROLL,
  FACEBOOK_LOGO,
  GETAMATES,
  INSTAGRAM_LOGO,
  LINKEDIN_LOGO,
  MEN_LOGO,
  SOCIALMEDIA,
} from "../../Service/imageservices";

// create a component
const SideNav = () => {
  return (
    <View style={styles.container}>
      <More />
    </View>
  );
};

const More = () => {
  return (
    <SafeAreaView>
      <View style={styles.headerview}>
        <Text style={styles.text}>Hi Salman</Text>

        <Image style={styles.bellimage} source={BELL}></Image>
        <Image style={styles.menlogo} source={MEN_LOGO}></Image>
      </View>
      <View>
        <Image style={styles.scrollimage} source={BLUE_SCROLL}></Image>
        <Text style={styles.moretext}>More</Text>
      </View>

      <View>
        <Card style={styles.card}>
          <Card.Content>
            <View style={styles.moreview}>
              <Image style={styles.getamate} source={GETAMATES}></Image>
              <Text style={styles.moretexts}>Get a Mate</Text>
            </View>
          </Card.Content>
        </Card>
      </View>

      <View>
        <Card style={styles.card}>
          <Card.Content>
            <View style={styles.moreview}>
              <Image style={styles.getamate} source={ABOUTUS}></Image>
              <Text style={styles.moretexts}>About Us</Text>
            </View>
          </Card.Content>
        </Card>
      </View>

      <View>
        <Card style={styles.cards}>
          <Card.Content>
            <View style={styles.moreview}>
              <Image style={styles.getamate} source={SOCIALMEDIA}></Image>
              <Text style={styles.moretexts}>Social Media</Text>
            </View>
            <View style={styles.socialmediaview}>
              <Image style={styles.socialmedia} source={INSTAGRAM_LOGO}></Image>
              <Image style={styles.socialmedia} source={FACEBOOK_LOGO}></Image>
              <Image style={styles.socialmedia} source={LINKEDIN_LOGO}></Image>
            </View>
          </Card.Content>
        </Card>
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "#2c3e50",
    padding: 10,
  },
  bellimage: {
    height: 25,
    width: 25,
  },
  menlogo: {
    height: 25,
    width: 25,
  },

  headerview: {
    flexDirection: "row",
    height: 40,
    borderBottomWidth: 2,
    borderColor: "grey",
  },
  text: {
    color: "blue",
  },
  moretext: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 20,
  },
  card: {
    height: 50,
    width: "100%",
    marginTop: 20,
  },
  getamate: {
    height: 22,
    width: 22,
  },
  moreview: {
    flexDirection: "row",
    // borderBottomWidth:2,
    // borderColor:"black",
  },
  moretexts: {
    fontWeight: "bold",
    fontSize: 17,
    marginLeft: 20,
  },
  cards: {
    height: 100,
    width: "100%",
    marginTop: 20,
  },
  socialmedia: {
    height: 30,
    width: 30,
    
  },
  socialmediaview: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop:20
  },
});

//make this component available to the app
export default SideNav;
