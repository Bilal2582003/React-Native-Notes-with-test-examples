import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native'
import React, {useState} from 'react'

const Search = () => {
    const api = [
        { id: 1, name: 'Muhammad' },
        { id: 2, name: 'Bilal' },
        { id: 3, name: 'Raza' },
        { id: 4, name: 'Ali' },
    ];
    const [searchQuery, setSeachQuery] = useState("");
    const filterData = api.filter(data => data.name.toLowerCase().includes(searchQuery.toLowerCase()) );

    const renderSearchData = ({item})=>(
        <View style={styles.contactItem}>
            <Text>{item.name}</Text>
        </View>
    )
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact List</Text>
      <TextInput
        placeholder='Search Contacts'
        placeholderTextColor='gray'
        value={searchQuery}
        onChangeText={setSeachQuery}
        style={styles.searchBar}
      />
      <FlatList
        data={filterData}
        keyExtractor={item => item.id}
        renderItem={renderSearchData}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e3f2fd",
        padding: 20
    },
    title:{
        fontSize:26,
        fontWeight: "blod",
        color: "#1e88e5",
        marginBottom:20,
        textAlign: "center"
    },
    searchBar:{
        height: 40,
        borderColor: "#90caf9",
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 15,
        marginBottom: 20,
        backgroundColor: "#fff"
    },
    listContainer: {
        paddingBottom: 20
    },
    contactItem:{
        padding: 15,
        border: 1,
        borderColor: "#90caf9",
        borderRadius: 10,
        marginBottom: 10,
        backgroundColor: "#fff"
    }
})