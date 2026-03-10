import React from 'react'
import { View, Text } from 'react-native'

const First = () => {
  // using variable to store the value of the text
  const text = 'vairable value';
  const func = () => {
    return 'function value';
  }
  return (
    <View>
      <Text>First inherited component</Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{text}</Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{3+2}</Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{func()}</Text>
    </View>
  )
}

export default First