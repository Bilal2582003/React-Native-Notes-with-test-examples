import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'; // it is reactJs feature
import { increment, decrement, reset } from './redux/slice/counterSlice'; // it is reactJs feature

export default function ReduxCounter() {
    const count = useSelector((state) => state.counter.value); // it will use globally like this inside of function
    const dispatch = useDispatch(); // it is reactJs feature
    return (
        <View>
            <Text>ReduxCounter Screen</Text>
            <Text>Count: {count}</Text>
            <Button title="Increment" onPress={() => dispatch(increment())}  />
            <Button title="Decrement" onPress={() => dispatch(decrement())}  />
            <Button title="Reset" onPress={() => dispatch(reset())}  />
        </View>
    );
}