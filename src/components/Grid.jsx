import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'

const data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
    { id: 5, name: 'Item 5' },
    { id: 5, name: 'Item 5' },
    { id: 5, name: 'Item 6' },
    { id: 5, name: 'Item 7' },
    { id: 5, name: 'Item 8' },
    { id: 5, name: 'Item 9' },
    { id: 5, name: 'Item 10' },
    { id: 5, name: 'Item 11' },
    { id: 6, name: 'Item 12' }
];
const Grid = () => {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.heading}>Grid Example</Text>
            <ScrollView contentContainerStyle={styles.container}>
                {
                    data.map((item) => (
                        <View style={styles.grid} key={item.id}>
                            <Text style={styles.gridText}>{item.name}</Text>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    )
}

export default Grid

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    heading:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10 ,
        color: 'blue',
    },
    container:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding:10,
    },
    grid:{
        backgroundColor: 'lightblue',
        borderRadius: 15,
        padding: 10,
        marginBottom: 20,
         width: "48%",
         height: 100,
         alignItems: 'center',
         justifyContent: 'center',
    },
    gridText:{
        fontSize: 16,
        fontWeight: 'bold',
        color:"white",  
    }
});