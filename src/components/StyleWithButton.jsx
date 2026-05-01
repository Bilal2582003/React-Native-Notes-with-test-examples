import { View, Text } from 'react-native'
import React from 'react'

const StyleWithButton = () => {

    // To style button we have to use the "TouchableOpacity" component instead of "Button" component. Because Button component does not accept style props but TouchableOpacity accepts style props and we can style it as per our requirement.
    // TouchableHeight isma onPress function use karna lazmi ha wrna press nh hoga. for change clicked color underlayColor="red"
  return (
    <View>
      <Text>StyleWithButton</Text>
    </View>
  )
}

export default StyleWithButton