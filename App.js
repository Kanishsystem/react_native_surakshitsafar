import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ExampleDetailCard from './src/Components/ExampleDetailCard';
import ExampleDetailSeperateCards from './src/Components/ExampleDetailSeperateCards';
import AllDashboard from './src/Components/Dashboard';
import StatePoliceDashboard from './src/Pages/VehicleManufacturer/VehicleManufacturerDashboard';
import VehicleManufacturerDashboard from './src/Pages/VehicleManufacturer/VehicleManufacturerDashboard';
import StatePoliceDashboards from './src/Pages/StatePolice/StatePoliceDashboard';
import VLTDDashboards from './src/Pages/VLTDManufacturer/VLTDDashboard';
import TransportOfficialDashboards from './src/Pages/TransportOfficials/TransportOfficialDashboard';

export default function App() {
  return (
    <View>
     <TransportOfficialDashboards/>
  {/* <StatePoliceDashboards/> */}
   {/* <VehicleManufacturerDashboard/> */}
    </View>
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
