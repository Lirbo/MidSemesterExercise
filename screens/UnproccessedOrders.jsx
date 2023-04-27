import { View, Text } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import {OrdersContext} from '../contexts/OrdersContext';
import UnprocessedOrdersJSON from '../data/unprocessed_orders.json';
import OrderBox from '../components/OrderBox';
import { FlatList } from 'react-native';

export default function UnproccessedOrders() {

    const {unprocessedOrders} = useContext(OrdersContext);

  return (
    <FlatList 
    data={unprocessedOrders}
    renderItem={({item})=> <OrderBox {...item} />}
    keyExtractor={unprocessedOrders.id}
    />
  )
}