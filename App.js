import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Dashboard from './src/Pages/PermitHolder/Dashboard';
import LiveMonitoring from './src/Pages/PermitHolder/LiveMonitoring';
import { NavigationContainer } from '@react-navigation/native';
import PermitViolation from './src/Pages/PermitHolder/PermitViolation';
import PermitViolationDetail from './src/Pages/PermitHolder/PermitViolationDetail';
import DriverOnDuty from './src/Pages/PermitHolder/DriverOnDuty';
import EmergencyAlerts from './src/Pages/StatePolice/EmergencyAlerts';
import DashboardComponent from './src/Pages/Login/DashboardComponent';
import DetailCard from './src/Components/DetailCard';
import AllDashboard from './src/Components/Dashboard';
import HeaderDashboard from './src/Components/Dashboard';
import HeaderComponent from './src/Components/HeaderComponent';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer>
    {/* <Dashboard /> */}
    {/* <DashboardComponent/> */}
    {/* <HeaderComponent/> */}
    <AllDashboard/>
   {/* <HeaderDashboard/> */}
    {/* <DetailCard/> */}
    {/* <PermitViolation/> */}
    {/* <PermitViolationDetail/> */}
    {/* <DriverOnDuty/> */}
    {/* <EmergencyAlerts/> */}
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
