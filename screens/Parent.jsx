// it is reactJs feature
// PROP Dilling And UseContext Hook Example with code
// Prop drilling is data share with child by giving parameters. But if we have many child components then it is difficult to share data with child components. So we can solve this problem by using useContext Hook. It is a React Hook that allows us to share data between components without having to pass props down manually at every level of the component tree.
// so we can use useContext Hook to share data between components. It is a React Hook that allows us to share data globally between components without having to pass props down manually at every level of the component tree .

// Context (Create, Provide, Use) we create before class for global use. 
import React, { createContext, useState } from 'react';
import { View, Text } from 'react-native';
import FirstChild from './FirstChild';

export const CounterContext = createContext(); // it will create globally like this outside of function

export default function Parent() {
    const [count, setCounter] = useState(0);
    const incFunc = ()=>{
        setCounter(count + 1);
    }
    return (
        <CounterContext.Provider value={{ count, incFunc }}>
            <View style={{flex: 1, justifyContent: "center", alignItems : "center"}}>
                <FirstChild />
            </View>
        </CounterContext.Provider>
    );
}