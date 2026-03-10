import { View, Text } from 'react-native'
import React from 'react'

const Child = (props) => {
    // console.log(props)
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}> Child </Text>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}> Prop Count: {props.data} </Text>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}> Prop Name: {props.name} </Text>
    </View>
  )
}
// it is use in poprs 
export default Child;