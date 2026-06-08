import { View, Text, Alert, Button } from 'react-native'
import React from 'react'


const showAlert = ()=>{

  Alert.alert(
    "There will be Title",
    "There will be Message",
    [
      { 
        text: "Cancel",
         onPress: ()=> console.log("Cancel"),
          style: "cancel"
      },
      {
        text: "OK",
        onPress: ()=> console.log("Okay"),
        style: "default"
      }
    ],
    {
      cancelable: false
    }
  )
}
const AlertExp = () => {
  return (
    <View>
      <Text>Alert Exp</Text>
      <Button title="Show alret" onPress={showAlert} />
    </View>
  )
}

export default AlertExp