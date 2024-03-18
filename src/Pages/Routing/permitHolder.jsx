import React from 'react'

import { createStackNavigator } from "@react-navigation/stack";
import LiveMonitoring from '../PermitHolder/LiveMonitoring';
const Stack = createStackNavigator();

const permitHolder = () => {
  return (
    <Stack.Navigator>
    

<Stack.Screen name="live-monitoring" component={LiveMonitoring} options={{ headerShown: true }}/>


  </Stack.Navigator>
  )
}

export default permitHolder




c