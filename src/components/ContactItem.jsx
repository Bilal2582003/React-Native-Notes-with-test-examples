import { View, Text } from 'react-native'
import React from 'react'

const ContactItem = ({data}) => {
  return (
    <View>
      <Text>{data.name}</Text>
      <Text>{data.email}</Text>
    </View>
  )
}

export default ContactItem