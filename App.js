import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ClientProducts from './screens/ClientProducts';
import ClientProfile from './screens/ClientProfile';
import ClientCart from './screens/ClientCart';
import UnproccessedOrders from './screens/UnproccessedOrders';
import ProcessingOrders from './screens/ProcessingOrders';
import UserContextProvider from './contexts/UserContext';
import LoginBox from './components/LoginBox';
import CartContextProvider from './contexts/CartContext';
import DeliveredOrders from './screens/DeliveredOrders';
import OrdersContextProvider from './contexts/OrdersContext';
import OrdersHistoryContextProvider from './contexts/OrdersHistoryContext';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function ClientTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={ClientProfile} options={{ tabBarLabel: 'Profile', tabBarIcon: () => (<MaterialCommunityIcons name="account" size={35} color="black" />) }} />
      <Tab.Screen name="Products" component={ClientProducts} options={{ tabBarLabel: 'Products', tabBarIcon: () => (<MaterialCommunityIcons name="flower" size={35} color="black" />) }} />
      <Tab.Screen name="Cart" component={ClientCart} options={{ tabBarLabel: 'Cart', tabBarIcon: () => (<MaterialCommunityIcons name="cart" size={35} color="black" />) }} />
    </Tab.Navigator>
  )
}

function AdminTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Unproccessed" component={UnproccessedOrders} options={{ tabBarLabel: 'Unproccessed', tabBarIcon: () => (<MaterialCommunityIcons name="exclamation" size={35} color="black" />) }} />
      <Tab.Screen name="Processing" component={ProcessingOrders} options={{ tabBarLabel: 'Processing', tabBarIcon: () => (<MaterialCommunityIcons name="cog-box" size={35} color="black" />) }} />
      <Tab.Screen name="Delivered" component={DeliveredOrders} options={{ tabBarLabel: 'Delivered', tabBarIcon: () => (<MaterialCommunityIcons name="check-decagram" size={35} color="black" />) }} />
    </Tab.Navigator>
  )
}


export default function App() {
  return (
    <OrdersHistoryContextProvider>
      <OrdersContextProvider>
        <CartContextProvider>
          <UserContextProvider>
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen name="LoginBox" component={LoginBox} />
                <Stack.Screen name="ClientScreen" component={ClientTabs} />
                <Stack.Screen name="AdminScreen" component={AdminTabs} />
              </Stack.Navigator>
            </NavigationContainer>
          </UserContextProvider>
        </CartContextProvider>
      </OrdersContextProvider>
    </OrdersHistoryContextProvider>
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