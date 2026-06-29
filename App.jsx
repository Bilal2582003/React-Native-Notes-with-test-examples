import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Home from './screens/Home'; // AsyncStorage example with code
import Profile from './screens/Profile'; // backgroundImage and Image with local and remote source example with code
// solve Prop Drilling with useContext Hook example with code
import Ionicons from "@react-native-vector-icons/ionicons";

import Parent from './screens/Parent'; //useContext it is reactJs feature


import { Provider } from 'react-redux';
import store  from './screens/redux/store/store'; // redux toolkit use for state management. before we use only redux but we need to do everything seperate there and code was lengthy
import ReduxCounter from './screens/ReduxCounter'; // redux toolkit use for state management. before we use only redux but we need to do everything seperate there and code was lengthy

import  Zustand  from './screens/Zustand'; // zustand use for state management. before we use only redux but we need to do everything seperate there and code was lengthy
const Tab = createBottomTabNavigator();

const getTabBarIcon = (routeName, focused, color, size) => {
  let iconName;
  
  if (routeName === 'Home') {
    iconName = focused ? 'home' : 'home-outline';
  }
  else if (routeName === 'Profile') {
    iconName = focused ? 'person' : 'person-outline';
  }
  else if (routeName === 'UseContext') {
    iconName = focused ? 'cog' : 'cog-outline';
  }
  else if (routeName === 'ReduxToolkit') {
    iconName = focused ? 'cog' : 'cog-outline';
  }
  else if (routeName === 'Zustand') {
    iconName = focused ? 'cog' : 'cog-outline';
  }

  return <Ionicons name={iconName} size={size} color={color} />;
}

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
     <Tab.Navigator screenOptions={({route})=>( // route show where you are in the app
      {
        tabBarIcon: ({focused, color, size}) => 
          getTabBarIcon(route.name, focused, color, size),
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle:{
            paddingBottom:5,
            height:60,
          },
      }
    )} >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
       <Tab.Screen name="UseContext" component={Parent} /> 
      <Tab.Screen name="ReduxToolkit" component={ReduxCounter} />
      <Tab.Screen name="Zustand" component={Zustand} />
    </Tab.Navigator>
    </NavigationContainer>
    </Provider>
  );
}