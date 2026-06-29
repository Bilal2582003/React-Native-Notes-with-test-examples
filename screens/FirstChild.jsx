import React from 'react';
import { View, Text } from 'react-native';
import SubChild from './SubChild';
export default function FirstChild() {
    return (
        <View>
            <Text>FirstChild Screen</Text>
            <SubChild />
        </View>
    );
}