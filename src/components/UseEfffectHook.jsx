import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

const UseEfffectHook = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("this is Use Effect Hoot Initiate")
    }, []) // this is for only one time run when component is load. It is called empty array dependency
  return (
    <View>
      <Text>UseEfffectHook</Text>
      <Text>Value: {count}</Text>
      <Button title="Add In Count" onPress={()=>setCount(count+1)} />
    </View>
  )
}

export default UseEfffectHook