import { View, Text, Button } from 'react-native'
import React, {useState, useEffect} from 'react'

const UseEffectHookUpdate = () => {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    const [count3, setCount3] = useState(1);
    useEffect(() => {
        console.log("this is Use Effect Hoot Initiate")
    }, [count, count1]); // this is for only mount and update count and count1. It is called array dependency  
    useEffect(() => {
        console.log("this Call only when multiply by 2 hit")
    }, [count3]); // this is hit when count3 mount and count3 update not work on (count,count1)  
  return (
    <View>
      <Text style={{fontSize: 30, marginBottom: 5}}>UseEffectHookUpdate</Text>
      <Text style={{fontSize: 30, marginBottom: 5}}>Count: {count}</Text>
      <Text style={{fontSize: 30, marginBottom: 5}}>+10: {count1}</Text>
      <Text style={{fontSize: 30, marginBottom: 5}}>* 2: {count3}</Text>
      <Button style={{marginBottom: 5}} title="Add 1" onPress={()=>setCount(count + 1)} />
      <Button style={{marginBottom: 5}} title="Add 10" onPress={()=>setCount1(count1+10)} />
      <Button style={{marginBottom: 5}} title="Multiply by 2" onPress={()=>setCount3(count3 * 2)} />
    </View>
  )
}

export default UseEffectHookUpdate