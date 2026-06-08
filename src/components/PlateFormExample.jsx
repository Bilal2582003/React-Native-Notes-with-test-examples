import { View, Text, StyleSheet,Platform } from 'react-native'
import React from 'react'

const PlateFormExample = () => {
    const opSys = Platform.OS == "ios" ? "IOS" : "Android";
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Hello {opSys}!</Text>
      <Text style={styles.plateFormText}>I am {opSys} User</Text>
    </View>
  )
}

export default PlateFormExample
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#a0c0fa',
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Plateform.select({
            ios: "#3a2df5",
            andriod: "#08683b",
            macos: "#999707",
        }),
    },
    plateFormText:{
        fontSize: 18,
        color: '#3a2df5',
    }
});