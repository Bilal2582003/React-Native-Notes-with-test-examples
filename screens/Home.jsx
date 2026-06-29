
import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';


const Home = ({navigation}) => {
  return (
  <View>
    <Text>Home Screen</Text>
     <TouchableOpacity
        style={{
          backgroundColor: '#2196F3',
          paddingHorizontal: 20,
          paddingVertical: 10,
          alignSelf: 'flex-start',
          borderRadius: 5,
        }}
        onPress={() => navigation.openDrawer()}
      >
        <Text style={{ color: 'white' }}>Press me</Text>
      </TouchableOpacity>
  </View>
  );
};

export default Home;