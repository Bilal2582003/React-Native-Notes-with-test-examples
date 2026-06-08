import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, {useState, useEffect} from 'react'
import axios from 'axios';

const GetWithFlatList = () => {

    const [userData, setData] = useState([]);
    useEffect( ()=>{
         axios.get('http://10.0.2.2:3000/users')
        .then( (res) =>{ 
            console.log(res.data)
            setData(res.data)
         } )
        .catch( err => console.log(err) )
    }, [] )

    const renderData = ({item})=>(   
            <View style={styles.card}>
                <Text style={styles.name}>{item.name}</Text>
                <View style={styles.infoContainer}>
  <Text style={styles.info}>{item.age}</Text>
  <Text style={styles.id}>{item.id}</Text>
</View>
            </View>
        
    )
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Users</Text>
      <FlatList data={userData} renderItem={renderData} keyExtractor={(item)=> item.id }  />
    </View>
  )
}

export default GetWithFlatList
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#b6d0f7',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    card: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        borderLeftColor: 'blue',
        borderLeftWidth: 5,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
   infoContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
//   backgroundColor: '#f5f5f5',
  borderRadius: 10,
  paddingRight: 12,
  paddingVertical: 3,
//   marginTop: 6,
},

info: {
  fontSize: 14,
  color: '#555',
},

id: {
  color: 'gray',
  fontSize: 12,
  backgroundColor: '#e0e0e0',
  paddingHorizontal: 8,
  paddingVertical: 4,
  borderRadius: 5,
},

})