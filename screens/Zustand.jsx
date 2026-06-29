import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useZustandStore } from '../zustand/store'; // it is reactJs feature

export default function Zustand() {
    const { count, increment, decrement, reset } = useZustandStore(); // it will use globally like this inside of function

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Zustand Screen</Text>
            <Text style={styles.text}>Count: {count}</Text>
            <Button title="Increment" onPress={() => increment()}  />
            <Button title="Decrement" onPress={() => decrement()}  />
            <Button title="Reset" onPress={() => reset()}  />
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