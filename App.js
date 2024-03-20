import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ExampleDetailCard from './src/Components/ExampleDetailCard';
import ExampleDetailSeperateCards from './src/Components/ExampleDetailSeperateCards';

export default function App() {
  return (
    <View>
    <ExampleDetailCard />
    {/* <ExampleDetailSeperateCards /> */}
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
