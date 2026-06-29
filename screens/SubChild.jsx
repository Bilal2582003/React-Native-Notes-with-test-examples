import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import {CounterContext} from  './Parent';
import { useSelector } from 'react-redux';
export default function SubChild() {
    const {count, incFunc} = useContext(CounterContext); // it will use globally like this inside of function
    const reduxCount = useSelector((state)=> state.counter.value);
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>SubChild Screen</Text>
            <Text style={styles.text}>Redux Count: {reduxCount}</Text>
            <Text style={styles.text}>Count: {count}</Text>
            <Button title="+" onPress={incFunc}  />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    fontSize: 26,
    marginBottom: 10
  }
});