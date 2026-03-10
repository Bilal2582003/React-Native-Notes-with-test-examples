import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Style = () => {
  return (
    <View>
      <Text style={ style.text }>My Full name is: Muhammad Bilal Raza Attari</Text>
      <Text style={ [style.text, style.text1 ]}>Muhammad Bilal</Text>
      <Text style={ style.text }>My Full name is: Muhammad Bilal Raza Attari</Text>
    </View>
  )
}

const style = StyleSheet.create({
    text: {
        backgroundColor : 'purple',
        color : 'white',
        marginVertical : 10,
        padding : 5,
        fontSize : 20,
        fontFamily : 'cursive'
    },
    text1:{
textAlign: 'center',
  borderWidth:4,
  borderColor: 'lightblue'
    }
});

export default Style