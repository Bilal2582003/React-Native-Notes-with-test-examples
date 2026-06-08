import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, {useRef} from 'react'

const UseRefHook = () => {
    // useRef is for accessing the DOM elements directly without re-rendering the component. It is used to store a mutable value that does not cause a re-render when updated. It can be used to access the properties and methods of a component, such as focus, scroll, or measure. It can also be used to store any mutable value that you want to persist across renders, such as a timer ID or a previous state value. 
    const myRef = useRef(); // use useRef to create a reference to the Text component
    const handleRef = () => {
        myRef.current.setNativeProps({
            style: {color:'red', fontSize:20},
            text : "Updated Text Value is: Bilal Raza"
        });
    }
  return (
    <View style={styles.container}>
      
      <Text style={styles.Text} ref={myRef}>Hello, world!</Text>
      <TouchableOpacity style={styles.button} onPress={handleRef}>
        <Text style={styles.buttonText}>Log Ref</Text>
      </TouchableOpacity>
    </View>
  )
}

export default UseRefHook;
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'$f0f0f0'
    },
    Text:{
        padding: 10,
        margin: 10,
        fontSize:18,
        color:'black',
        backgroundColor:'lightgray',
        borderRadius:5
    },
    button:{
        backgroundColor:'lightblue',
        padding:10,
        borderRadius:5,
        marginTop:20
    },
    buttonText:{
        color:'black',
        fontWeight:'bold'
    }
})
