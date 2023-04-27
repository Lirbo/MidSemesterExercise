import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { CartContext } from '../contexts/CartContext'

export default function ProductBox({id, name, price, description}) {

  const {cartItems, setCartItems} = useContext(CartContext);

  function addCartItem(){
    let item = {
      "id": id,
      "name": name,
      "price": price,
      "description": description
    };
    setCartItems([...cartItems, item]);
  }
  

  return (
    <View style={styles.container}>
      <Text style={styles.text}>id: {id}</Text>
      <Text style={styles.text}>name: {name}</Text>
      <Text style={styles.text}>price: {price}</Text>
      <Text style={styles.text}>description: {description}</Text>
      <TouchableOpacity onPress={addCartItem}>
        <View style={styles.button}>
          <Text style={styles.buttontext}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#555',
    padding: 15,
    margin: 15,
    borderRadius: 15,
  },
  textinput: {
    width: 250,
    height: 50,
    margin: 5,
    alignSelf: 'center'
  },
  header: {
    color: '#FFF',
    fontSize: 22,
  },
  text:{
    color: '#fff'
  },
  button: {
    backgroundColor: '#55AAAA',
    padding: 5,
    width: 100,
    height: 50,
    margin: 15,
    borderRadius: 5,
    alignSelf: 'center'
  },
  buttontext: {
    color: '#FFF',
    fontSize: 28,
    textAlign: 'center'
  }
});