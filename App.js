import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './screens/LoginScreen';
import ClientScreen from './screens/ClientScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="LoginScreen" component={LoginScreen} options={{ tabBarLabel: 'products',  tabBarIcon:()=>(<MaterialCommunityIcons name="flower" size={35} color="black"/>)}} />
        <Tab.Screen name="ClientScreen" component={ClientScreen} options={{ tabBarLabel: 'something',  tabBarIcon:()=>(<MaterialCommunityIcons name="flower" size={35} color="black"/>)}} />
      </Tab.Navigator>
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
