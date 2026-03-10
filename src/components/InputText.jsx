import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'

const InputText = () => {
    let [uName, setUserName] = useState('');
  return (
    <View>
      <Text style={ {fontSize: 20} }>InputText</Text>
      <Text style={ {fontSize: 20} }>UserName : { uName } </Text>
      <TextInput style={ {fontSize: 30 , borderWidth: 2, borderColor: 'green', margin: 10} }  placeholder='Enter your name' onChangeText={(d)=> setUserName(d) } />
    </View>
  )
}

export default InputText