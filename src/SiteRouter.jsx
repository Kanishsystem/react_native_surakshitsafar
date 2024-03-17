import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import HomePage from './pages/Home/HomePage';
import Login from './pages/Login/Login';
import RateOurService from './pages/Help/Feedback/RateOurService';
import Home from './pages/TestButtons';
import EarnCrops from './pages/Home/EarnCrops';
import Promos from './pages/Home/Promos';
import RedeemedCrops from './pages/Home/RedeemedCrops';
import UserDetails from './pages/Home/UserDetails';
import BottomBar from './pages/Layout/BottomBar';
import SideNav from './pages/Layout/SideNav';
import TestScreen from './pages/Layout/TestScreen';
import TopBar from './pages/Layout/TopBar';
import EmailPage from './pages/Login/Emailpage';
import ForGot from './pages/Login/Forgot';
import SignUp from './pages/Login/SignUp';
import AboutUs from './pages/More/AboutUs';
import GetAMate from './pages/More/GetAMate';
import SocialMedia from './pages/More/SocialMedia';
import MyAccount from './pages/Profile/MyAccount';
import MyCropCard from './pages/Profile/MyCropCard';
import MyProfile from './pages/Profile/MyProfile';
import { Settings } from 'react-native';
import Setting from './pages/Profile/Settings';
import Address from './pages/WhishList/Address';
import MyCart from './pages/WhishList/MyCart';
import OrderScreen from './pages/WhishList/OrderScreen';
import ShoppingCart from './pages/WhishList/ShoppingCart';
import WhishList from './pages/WhishList/WhishList';
import PrivacyAndDataRights from './pages/Help/ImportantInformation/PrivacyAndDataRights';
import TermsAnsConditions from './pages/Help/ImportantInformation/TermsAnsConditions';
const Stack = createStackNavigator();
const SiteRouter = () => {
  return (
   <>
    <NavigationContainer>
      <Stack.Navigator>
        {/* Home */}
        <Stack.Screen name="earncrops" component={EarnCrops} />
        <Stack.Screen name="homepage" component={HomePage} />
        <Stack.Screen name="promos" component={Promos} />
        <Stack.Screen name="redeemedcrops" component={RedeemedCrops} /> 
        <Stack.Screen name="userdetails" component={UserDetails} />
        {/* Layout */}
        <Stack.Screen name="bottombar" component={BottomBar} />
        <Stack.Screen name="sidenav" component={SideNav} />
        <Stack.Screen name="testscreen" component={TestScreen} />
        <Stack.Screen name="topbar" component={TopBar} />
        {/* Login */}
        <Stack.Screen name="emailpage" component={EmailPage} />
        <Stack.Screen name="forgot" component={ForGot} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signup" component={SignUp} />
        {/* More */}
        <Stack.Screen name="aboutus" component={AboutUs} />
        <Stack.Screen name="getamate" component={GetAMate} />
        <Stack.Screen name="socialmedia" component={SocialMedia} />
        {/* Profile */}
        <Stack.Screen name="myaccount" component={MyAccount} />
        <Stack.Screen name="mycropcard" component={MyCropCard} />
        <Stack.Screen name="myprofile" component={MyProfile} />
        <Stack.Screen name="settings" component={Setting} />
        {/* Whishlist */}
        <Stack.Screen name="address" component={Address} />
        <Stack.Screen name="mycart" component={MyCart} />
        <Stack.Screen name="orderscreen" component={OrderScreen} />
        <Stack.Screen name="shoppingcart" component={ShoppingCart} />
        <Stack.Screen name="whishlist" component={WhishList} />
       {/* Feedback */}
       <Stack.Screen name="rateourservice" component={RateOurService} />
       {/* ImportantInformation */}
       <Stack.Screen name="privacyanddatarights" component={PrivacyAndDataRights} />
       <Stack.Screen name="termsandconditions" component={TermsAnsConditions} />
       {/* Support */}
       <Stack.Screen name="address" component={Claim} />
       <Stack.Screen name="address" component={Address} />
       <Stack.Screen name="address" component={Address} />
       <Stack.Screen name="address" component={Address} />
       <Stack.Screen name="address" component={Address} />
       <Stack.Screen name="address" component={Address} />
       <Stack.Screen name="address" component={Address} />
       <Stack.Screen name="address" component={Address} />
       <Stack.Screen name="address" component={Address} />

      </Stack.Navigator>
    </NavigationContainer>
   </>
  )
}

export default SiteRouter