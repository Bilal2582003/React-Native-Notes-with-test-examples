 import { View, Text, SectionList , StyleSheet} from 'react-native'
import React from 'react'

const list = [
    {
        "title": "Fruits",
        "data": [
            {"id": "1","name": "Apple"},
            {"id": "2","name": "Banana"},
            {"id": "3","name": "Orange"}
        ],
    },
    {
        "title": "Vegetables",
        "data": [
            {"id": "1","name": "Carrot"},
            {"id": "2","name": "Broccoli"},
            {"id": "3","name": "Tomato"}
        ],
    },
];
const SectionListScreen = () => {
    const func = ({item}) => {
        return (
            <View style={style.item}> 
                <Text>{item.name}</Text>
            </View>
        )
    }
    const header = ({section}) => {
        return (
            <View > 
                <Text style={style.title}>{section.title}</Text>
            </View>
        )
    }
    return (
        <View style={style.container}>
            <SectionList sections={list} renderItem={func} renderSectionHeader={header} keyExtractor={(item) => item.id} />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#f0f0f0',
    },
    item: {
        padding: 7,
        marginVertical: 7,
        backgroundColor: 'lightblue',
        borderRadius: 5,
        borderColor: "blue",
        borderWidth: 1,
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        padding: 7,
        color: 'blue',
        backgroundColor: '#c1f1c1',
    }

})

export default SectionListScreen