import { Button, Text, View } from 'react-native'
import React, { Component } from 'react'

 class SecondClassComponent extends Component {

    constructor(){
        super();
        this.state = {
            name: 'M.Bilal',
        }
    }
    updateName = ()=>{
        this.setState({
            name: 'Bilal Mobile App'
        })
    }
  render() {
    return (
      <View>
        <Text>SecondClassComponent</Text>
        <Text>Name: {this.state.name}</Text>
        <Text>Age: {this.props.age}</Text>
        <Button onPress={this.updateName} title="Press Me" />
      </View>
    )
  }
}

export default SecondClassComponent