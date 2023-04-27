import React from 'react'
import { createContext, useState, useEffect } from 'react'

export const OrdersHistoryContext = createContext();

export default function OrdersHistoryContextProvider({children}) {

    const [ordersHistory, setOrdersHistory] = useState([]);

    const value = {
        ordersHistory,
        setOrdersHistory
    };

  return (
    <OrdersHistoryContext.Provider value={value}>
        {children}
    </OrdersHistoryContext.Provider>
  )
}
