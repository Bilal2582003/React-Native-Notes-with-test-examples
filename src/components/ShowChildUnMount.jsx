import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

const ShowChildUnMount = () => {
    useEffect(() => {
        console.log("I am a Child component and I am mounted");
        return () => {
            console.log("I am a Child component and I am unmounted");
        }
    }, []);

  return (
    <View>
      <Text style={{fontSize: 20}}>Show Child Un-Mount</Text>
    </View>
  )
}

export default ShowChildUnMount