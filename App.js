import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ExampleDetailCard from './src/Components/ExampleDetailCard';
import ExampleDetailSeperateCards from './src/Components/ExampleDetailSeperateCards';
import DeviceDetails from './src/Pages/VLTDManufacturer/DeviceDetails';
import HelpDesk from './src/Pages/VLTDManufacturer/HelpDesk';

export default function App() {
  return (
    <View>
    <ExampleDetailCard />
    {/* <ExampleDetailSeperateCards /> */}
    {/* <DeviceDetails /> */}
    {/* <HelpDesk /> */}
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
