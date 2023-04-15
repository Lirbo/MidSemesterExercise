import { View, Text } from 'react-native'
import React from 'react'
import LoginBox from '../components/LoginBox'
import { useNavigation } from '@react-navigation/native'

export default function LoginScreen() {
    const navigation = useNavigation();
  return (
    <View>
      <LoginBox navigation={navigation}/>
    </View>
  )
}