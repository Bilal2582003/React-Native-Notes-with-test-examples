import { View, Text, Button } from 'react-native'
import React, {useState} from 'react'

const UseStateHook = () => {

    // name hold my name and setName is a function to update the name.
    // useState is a hook that takes the initial value of the name and returns an array with the name and setName function
    const [name, setName] = useState('Bilal');

  return (
    <View>
      <Text>Use State Hook</Text>
      <Text>{name}</Text>
        <Button title="Change Name" onPress={() => name == "Bilal" ? setName('Raza') : setName('Bilal')} />  {/* when button is pressed the name will be updated to Raza */}
    </View>
  )
}

export default UseStateHook