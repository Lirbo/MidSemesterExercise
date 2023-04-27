import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import CartBox from '../components/CartBox';
import { OrdersHistoryContext } from '../contexts/OrdersHistoryContext'

export default function ClientCart() {

  const { cartItems, setCartItems } = useContext(CartContext);
  const {ordersHistory, setOrdersHistory} = useContext(OrdersHistoryContext);

  function addToOrdersHistory(){
    console.log(ordersHistory);
    setOrdersHistory([...ordersHistory, ...cartItems]);
    setCartItems([]);
  }

  return (
    <View>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartBox {...item} />}
        keyExtractor={cartItems.id}
      />
      <TouchableOpacity onPress={addToOrdersHistory}>
        <View style={styles.button}>
          <Text style={styles.buttontext}>Purchase</Text>
        </View>
      </TouchableOpacity>
    </View>

  )
}

const styles = StyleSheet.create({
  container:{
      backgroundColor: '#555',
      padding: 15,
      margin: 15
  },
  text:{
      color: '#FFF'
  },
  button:{
      backgroundColor: '#009999',
      padding: 15,
      margin: 15
  },
  buttontext:{
      color: '#FFF',
      fontSize: 22,
      alignSelf: 'center'
  }
});