import { View, Text, StyleSheet } from 'react-native'
import React, {useContext} from 'react'
import { TouchableOpacity } from 'react-native'
import { CartContext } from '../contexts/CartContext'

export default function CartBox({id, price}) {

    const {cartItems, setCartItems} = useContext(CartContext);

    function removeCartItem(){
        setCartItems(cartItems.filter((i) => i.id != id));
    }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>id: {id}</Text>
      <Text style={styles.text}>price: {price}</Text>
      <TouchableOpacity onPress={removeCartItem}>
        <View style={styles.button}>
            <Text style={styles.buttontext}>Remove</Text>
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