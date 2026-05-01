import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SecondClassComponent from './SecondClassComponent';

class ClassComponent extends Component {
    age = 25; 
    render() {
        return (
            <View>
                <Text style={{fontSize: 20}}>Hello, Class Component</Text>
                <SecondClassComponent age={this.age} /> 
            </View>
        );
    }
}

export default ClassComponent;