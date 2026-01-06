import {Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View 
        style={{
          backgroundColor:'rgba(233, 233, 233, 1)',
          padding: 16,          
        }}>
        <Text
          style={{
            color: '#000'
          }}> hello emil</Text>
      </View>
      <View 
        style={{
          flex: 1,
          backgroundColor:'rgba(255, 255, 255, 1)',
          padding: 16,          
        }}>
        <Text
          style={{
            color: '#000'
          }}> selamat datang di emilmerce</Text>
      </View>
    </SafeAreaView>
  )
}