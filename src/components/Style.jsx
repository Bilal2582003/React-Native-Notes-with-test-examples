import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import extStyle from '../../style/style';

const Style = () => {
  return (
    <View>
      <Text style={ {textAlign: 'right', fontSize: 30} }>InLine</Text>
      <Text style={ [style.text, style.text1 ]}>Internal</Text>
      <Text style={ extStyle.extText }>Extenal</Text>
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