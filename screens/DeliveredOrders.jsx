import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import DeliveredOrdersJSON from '../data/delivered_orders.json'
import DeliveredBox from '../components/DeliveredBox'
import { OrdersContext } from '../contexts/OrdersContext'

export default function DeliveredOrders() {

    const {deliveredOrders} = useContext(OrdersContext);

  return (
    <FlatList 
    data={deliveredOrders}
    renderItem={({item})=> <DeliveredBox {...item} />}
    keyExtractor={deliveredOrders.id}
    />
  )
}