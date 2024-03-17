import React from "react";
import { Button } from "react-native-paper";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native";

const TestButtons = ({ navigation }) => {
 const data = [

    {
      title: "EarnCrops",
      link: "earncrops",
    },
    

    
  ];
  return (
    <>
      <SafeAreaView>
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            {/* <Text>Home Screen</Text> */}
            {data.map((item, index) => (
              <View key={index}>
                <Button
                  style={styles.button1}
                  onPress={() => navigation.navigate(item.link)}
                >
                  {item.title}
                </Button>
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    marginLeft: 110,
    marginTop: 20,
  },
  button1: {
    backgroundColor: "#069e5f",
    height: 40,
    width: 200,
    marginTop: 20,
    color:"white",
  },
  scrollView: {
    marginHorizontal: 20,
  },
});
export default TestButtons;
