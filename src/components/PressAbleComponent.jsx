import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'


const PressAbleComponent = () => {
    const handlePress = () => {
        console.log('Button Pressed!');
    }
    const handlePressIn = () => {
        console.log('Button Pressed IN!');
    }
    const handlePressOut = () => {
        console.log('Button Pressed Out!');
    }
    const handleLongPress = () => {
        console.log('Button Long Pressed!');
    } // by default 500ms. if we long press so only OnPress will not work otherwise all works
  return (
    <View style={styles.container}>
      <Text>PressAbleComponent</Text>
      <Pressable style={styles.button}  onPress={handlePress}
       onPressIn={handlePressIn}
       onPressOut={handlePressOut}
       onLongPress={handleLongPress}
       delayLongPress={5000} // 5 second long press 
       >
        <Text style={styles.buttonText}>Press Me</Text>
      </Pressable>
    </View>
  )
}

export default PressAbleComponent
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'lightblue'
    },
    button: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: 'blue',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },

});