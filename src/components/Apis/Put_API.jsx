import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import React, {useState, useEffect} from 'react'
import axios from 'axios'
const Put_API = () => {
    const [formData, setFormData] = useState({"id":'', "name":"", "age": "0"})

    const handleInput = (field, value)=>{
        setFormData({...formData, [field]: value});
    }
    const handleUpdate = async ()=>{
        try{
            const result = await axios.put(`http://10.0.2.2:3000/users/${formData.id}`, { name: formData.name, age: formData.age });
            setFormData({"id":'', "name":"", "age": "0"});
            Alert.alert("Success", "Data Updated Successfully.");
        }catch(err){
            Alert.alert("Error", "Failed to Update Data!");
        }
    }

  return (
      <View style={styles.container}>
      <Text style={styles.heading}>UPDATE Form</Text>
      <TextInput style={styles.input} value={formData.id} placeholder="Enter Id" onChangeText={(value) => handleInput('id', value)} />
      <TextInput style={styles.input} value={formData.name} placeholder="Enter Name" onChangeText={(value)=>handleInput("name", value)} />
      <TextInput style={styles.input} value={formData.age} placeholder="Enter Age" onChangeText={(value)=> handleInput("age", value)} />
      <TouchableOpacity onPress={handleUpdate} style={styles.btn}>
        <Text style={styles.btnText}>Update</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Put_API


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    btn: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    btnText: {
        color: 'white',
        fontSize: 16,
    },
})