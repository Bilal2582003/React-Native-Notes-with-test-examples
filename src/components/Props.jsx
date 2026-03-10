import { View, Text, Button } from 'react-native'
import React, {useState} from 'react'
import Child from './Child'


const Props = () => {
    const [count, setCounter] = useState(0);
    let name = "Bilal From parent child (PROPS)";
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}> Props </Text>
      <Button title="Counter" onPress={()=> setCounter(count+1)} />
      <Child data={count} name={name} />
    </View>
  )
}

export default Props;