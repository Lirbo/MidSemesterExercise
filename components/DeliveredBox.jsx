import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native';

export default function OrderBox({id, price}) {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>id: {id}</Text>
        <Text style={styles.text}>price: {price}</Text>
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
    }
});