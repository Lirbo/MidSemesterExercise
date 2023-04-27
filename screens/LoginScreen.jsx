import { View, Text } from 'react-native'
import React from 'react'
import LoginBox from '../components/LoginBox'

export default function LoginScreen({navigation}) {
  return (
    <View>
      <LoginBox navigation={navigation}/>
    </View>
  )
}