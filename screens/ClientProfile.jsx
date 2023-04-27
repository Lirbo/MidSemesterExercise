import { View, Text, FlatList } from 'react-native'
import React, {useContext} from 'react'
import { UserContext } from '../contexts/UserContext'
import { OrdersHistoryContext } from '../contexts/OrdersHistoryContext';
import DeliveredBox from '../components/DeliveredBox';

export default function ClientProfile() {

  const {currentUser} = useContext(UserContext);
  const {ordersHistory} = useContext(OrdersHistoryContext);

  return (
    <View>
      <Text>id: {currentUser.id}</Text>
      <Text>username: {currentUser.username}</Text>
      <Text>admin: {currentUser.admin}</Text>
      <FlatList 
      data={ordersHistory}
      renderItem={({item}) => <DeliveredBox {...item}/>}
      keyExtractor={ordersHistory.id}
      />
    </View>
  )
}