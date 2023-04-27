import React, { useContext } from 'react'
import {createContext, useState, useEffect} from 'react';

export const CartContext = createContext();

export default function CartContextProvider({children}) {

  const [cartItems, setCartItems] = useState([]);

  const value ={
    cartItems,
    setCartItems
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}
