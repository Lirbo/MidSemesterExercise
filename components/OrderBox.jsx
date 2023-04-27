import { View, Text, StyleSheet } from 'react-native'
import React, { useState, useContext } from 'react'
import { OrdersContext } from '../contexts/OrdersContext';
import { TouchableOpacity } from 'react-native';

export default function OrderBox({id, price}) {

  const {unprocessedOrders, setUnproccessedOrders, processingOrders, setProcessingOrders} = useContext(OrdersContext);

  function MoveToProcessedOrder(){
    let order = unprocessedOrders.find((o) => o.id == id);
    setUnproccessedOrders(unprocessedOrders.filter((o) => o.id != id));
    setProcessingOrders([...processingOrders, order]);
  }

  return (
    <View style={styles.container}>
        <Text style={styles.text}>id: {id}</Text>
        <Text style={styles.text}>price: {price}</Text>
        <TouchableOpacity style={styles.button} onPress={MoveToProcessedOrder}>
          <Text style={styles.buttontext}>Proccess</Text>
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
      color: '#FFF',
      fontSize: 18
    },
    button:{
      backgroundColor: '#009999',
      padding: 15,
      margin: 15
    },
    buttontext:{
      color:'#FFF',
      alignSelf:'center',
      fontSize:22
    }
});