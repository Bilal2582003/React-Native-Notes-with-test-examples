import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'

const data = [
    {id: "1", title: "Item 1"},
    {id: "2", title: "Item 2"},
    {id: "3", title: "Item 3"},
    {id: "4", title: "Item 4"},
    {id: "5", title: "Item 5"},
    {id: "6", title: "Item 6"},
    {id: "7", title: "Item 7"},
    {id: "8", title: "Item 8"},
    {id: "9", title: "Item 9"},
    {id: "10", title: "Item 10"},
];
const FlatListScreen = () => {
    const render = ({item})=>(
      <View style={style.item}> <Text >{item.title}</Text> </View>
    );
  return (
    <View>
      <Text style={style.container}>FlatList</Text>
      <FlatList data={data}  renderItem={render} keyExtractor={item => item.id} contentContainerStyle={style.list} />
    </View>
  )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#f8f8f8',
        padding: 15,
    },
    list: {
      paddingHorizontal: 20,
    },
    item:{
      backgroundColor: "lightblue",
      borderWidth: 5,
       borderColor: 'darkblue',
       padding:20,
      marginVertical: 8,
      borderRadius: 8,
      fontSize: 18,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
    },   shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
}); 


export default FlatListScreen