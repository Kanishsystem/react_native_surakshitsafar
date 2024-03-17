import React from "react";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import HelpNavigationStack from "./HelpNavigationStack";
import MoreNavigationStack from "./MoreNavigationStack";
import HomeNavigationStack from "./HomeNavigationStack";

const Tab = createMaterialBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeNavigationStack} />
          <Tab.Screen name="Help" component={HelpNavigationStack} />
          <Tab.Screen name="More" component={MoreNavigationStack} />
        </Tab.Navigator>
    
    </>
  );
};

export default BottomNavigation;
