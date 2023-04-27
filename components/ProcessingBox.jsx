import { View, Text, StyleSheet } from 'react-native'
import React, {useContext} from 'react'
import { TouchableOpacity } from 'react-native';
import { OrdersContext } from '../contexts/OrdersContext';

export default function OrderBox({id, price}) {

  const {processingOrders, setProcessingOrders, deliveredOrders, setDeliveredOrders} = useContext(OrdersContext);

  function moveToDeliveredOrders(){
    let order = processingOrders.find((o) => o.id == id);
    setProcessingOrders(processingOrders.filter((o) => o.id != id));
    setDeliveredOrders([...deliveredOrders, order]);
  }

  return (
    <View style={styles.container}>
        <Text style={styles.text}>id: {id}</Text>
        <Text style={styles.text}>price: {price}</Text>
        <TouchableOpacity style={styles.button} onPress={moveToDeliveredOrders}>
          <Text style={styles.buttontext}>Deliver</Text>
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