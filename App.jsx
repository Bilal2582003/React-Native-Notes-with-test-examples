import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './screens/Home';
import Profile from './screens/Profile';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{
        drawerStyle: {
          backgroundColor: "#e6e6e6",
          width:240
        },
        drawerLabelStyle:{
          fontSize: 18,
          color: "#333",
        },
        headerStyle:{
          backgroundColor: "#6200EE"
        },
        headerTintColor: "#fff",
        headerTitleAlign: "center"
      }}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}