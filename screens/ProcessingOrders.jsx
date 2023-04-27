import { View, Text, FlatList } from 'react-native'
import React, {useState, useEffect, useContext} from 'react'
import ProcessingOrdersJSON from '../data/processing_orders.json'
import ProcessingBox from '../components/ProcessingBox'
import { OrdersContext } from '../contexts/OrdersContext'

export default function ProcessingOrders() {

    const {processingOrders} = useContext(OrdersContext);

  return (
    <FlatList 
    data={processingOrders}
    renderItem={({item}) => <ProcessingBox {...item}/>}
    keyExtractor={processingOrders.id}
    />
  )
}