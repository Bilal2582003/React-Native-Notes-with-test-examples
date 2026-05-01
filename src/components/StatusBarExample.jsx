import { View, Text, StatusBar } from 'react-native'
import React from 'react'

const StatusBarExample = () => {
  return (
    <View>
      <Text>StatusBarExample</Text>
      <StatusBar backgroundColor="blue" barStyle="light-content" hidden={true} translucent={true} />
    </View>
  )
}

export default StatusBarExample