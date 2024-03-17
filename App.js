import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import LoginNavigationStack from "./src/Routing/LoginNavigationStack";
import { SiteProvider } from "./src/contexts/SiteProvider";


export default function App() {
  return (
    <PaperProvider>
      <SiteProvider>
      <NavigationContainer>
        {/* <BottomNavigation /> */}
        <LoginNavigationStack />
        {/* <SideNav/> */}
        {/* <Setting/> */}
       
        {/* <ProductView/> */}
      </NavigationContainer>
      </SiteProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
});

/*
  //     <View style={styles.container}>
    //       <Text>Open up App.js to start working on your app!</Text>
    //       <StatusBar style="auto" />
    //       <View>
    //       <SmartColumns>
    //              <SmartColumn width={6}><Text>column-1</Text></SmartColumn>
    //              <SmartColumn width={6}><Text>column-2</Text></SmartColumn>
    //          </SmartColumns>
    //       </View>
    // {/* <SmartColumns>

    // </SmartColumns> 
    <>
      {/* <GetAMate/> 
      {/* <Login /> 

      */
