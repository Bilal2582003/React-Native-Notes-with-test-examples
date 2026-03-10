import React from "react";
import { View, Text, Button } from "react-native";
const Press = () => {
    const getName = () => {
        console.warn('Bilal');
    }
  return (
    <View>
        <Text style={{ fontSize: 20 }}>Press inherited component</Text>
        <Button title="View name in Console" onPress={getName} />
    </View>
  );
};
export default Press