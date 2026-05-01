import { View, Text, TextInput, useState, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const Login = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const handelLogin = () => { console.log(`Email: ${email}, Password: ${password}` ); setEmail(''); setPassword(''); };
  return (
    <View>
      <Text style={style.title}>Login</Text>
      {/* email  */}
      <TextInput style={style.input} placeholder="Email" placeholderTextColor="#999" keyboardType="email-address" value={email} onChangeText={setEmail} autoCapitalize='none' />

      {/* password */}
      <TextInput style={style.input} placeholder="Password" placeholderTextColor="#999"  secureTextEntry value={password} onChangeText={setPassword} />

      {/* login btn  */}
        <TouchableOpacity style={style.button} onPress={handelLogin}> 
          <Text style={style.buttonText}>Login</Text>
        </TouchableOpacity>
    </View>
  )
}

const style= StyleSheet.create({
    title:{
        padding: 5,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    input: {
        padding: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        backgroundColor: '#fff',
        marginHorizontal: 15,
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 15,
        alignItems: 'center',
    }
    ,
    buttonText: {
        cursor: 'pointer',
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    }
})

export default Login