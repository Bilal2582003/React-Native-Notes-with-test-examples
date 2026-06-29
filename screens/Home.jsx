
// It is AsyncStorage Example with code 
import React, {useEffect, useState} from 'react';
import { View, Text, TouchableOpacity, Alert, TextInput, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { decrement, increment, reset } from './redux/slice/counterSlice';
const Home = ({navigation}) => {
const [name, setName] = useState('');
useEffect(()=>{
  getUserName();
},[])
// save function
const saveUserName = async ()=>{
  await AsyncStorage.setItem('userName', name);
  setName('');
}

// get function
const getUserName = async ()=>{
  const userName = await AsyncStorage.getItem('userName');
  if(userName){
    setName(userName);
  }
}
// remove function
const removeUserName = async ()=>{
  await AsyncStorage.removeItem('userName');
  setName('');
}

const dispatch = useDispatch();

  return (
  <View style={{flex:1, alignItems:'center'}}>
    <Text>Home Screen</Text>
    <TextInput
      placeholder='Enter Name'
      value={name}
      onChangeText={setName}
    />

     <TouchableOpacity
        style={{
          backgroundColor: '#2196F3',
          paddingHorizontal: 20,
          paddingVertical: 10,
          alignSelf: 'flex-start',
          borderRadius: 5,
        }}
        onPress={saveUserName}
      >
        <Text style={{ color: 'white' }}>Save UserName</Text>
      </TouchableOpacity>
     <TouchableOpacity
        style={{
          backgroundColor: '#21f34bff',
          paddingHorizontal: 20,
          paddingVertical: 10,
          alignSelf: 'flex-start',
          borderRadius: 5,
        }}
        onPress={getUserName}
      >
        <Text style={{ color: 'white' }}>Get UserName</Text>
      </TouchableOpacity>
     <TouchableOpacity
        style={{
          backgroundColor: '#f32121ff',
          paddingHorizontal: 20,
          paddingVertical: 10,
          alignSelf: 'flex-start',
          borderRadius: 5,
        }}
        onPress={removeUserName}
      >
        <Text style={{ color: 'white' }}>Remove UserName</Text>
      </TouchableOpacity>

      <Button title="Redux Counter Increment" onPress={() => dispatch(increment())} />
      <Button title="Redux Counter Decrement" onPress={() => dispatch(decrement())} />
      <Button title="Redux Counter Reset" onPress={() => dispatch(reset())} />
  </View>
  );
};

export default Home;

