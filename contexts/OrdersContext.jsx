import React from 'react'
import { createContext, useState, useEffect } from 'react'
import UnproccessedOrdersJSON from '../data/unprocessed_orders.json';
import ProccessingOrdersJSON from '../data/processing_orders.json';
import DeliveredOrdersJSON from '../data/delivered_orders.json';

export const OrdersContext = createContext();

export default function OrdersContextProvider({children}) {

    const [allOrders, setAllOrders] = useState([]);
    const [unprocessedOrders, setUnproccessedOrders] = useState([]);
    const [processingOrders, setProcessingOrders] = useState([]);
    const [deliveredOrders, setDeliveredOrders] = useState([]);

    useEffect(()=>{
        loadUnprocessedOrders();
        loadProcessingOrders();
        loadDeliveredOrders();
    },[]);

    function loadUnprocessedOrders(){
        try{
            setUnproccessedOrders(UnproccessedOrdersJSON);
        }
        catch(error){
            console.error(error);
        }
    }

    function loadProcessingOrders(){
        try{
            setProcessingOrders(ProccessingOrdersJSON);
        }
        catch(error){
            console.error(error);
        }
    }

    function loadDeliveredOrders(){
        try{
            setDeliveredOrders(DeliveredOrdersJSON);
        }
        catch(error){
            console.error(error);
        }
    }

    const value = {
        allOrders,
        setAllOrders,
        unprocessedOrders,
        setUnproccessedOrders,
        processingOrders,
        setProcessingOrders,
        deliveredOrders,
        setDeliveredOrders
    }

  return (
    <OrdersContext.Provider value={value}>
        {children}
    </OrdersContext.Provider>
  )
}
