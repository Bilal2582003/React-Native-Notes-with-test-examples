import { View, Text, Button } from 'react-native'
import React, {useState} from 'react'
import ShowChildUnMount from './ShowChildUnMount';
const UseEffectHookUnMount = () => {
    const [showChild, setShowChild] = useState(true);
  return (
    <View>
      <Text style={{fontSize: 20}}>Parent Component</Text>
      {
        showChild ? <ShowChildUnMount /> : null
      }
      {
        showChild ? <Button title='Hide Child' onPress={() => setShowChild(false)} /> : <Button title='Show Child' onPress={() => setShowChild(true)} />
      }
    </View>
  )
}

export default UseEffectHookUnMount