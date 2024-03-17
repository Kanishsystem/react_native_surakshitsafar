import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import HomePage from './pages/Home/HomePage';
import Login from './pages/Login/Login';
const Stack = createStackNavigator();
const SiteRouter = () => {
  return (
   <>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
   </>
  )
}

export default SiteRouter