// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import { NewAppScreen } from '@react-native/new-app-screen';
// import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
// import {
//   SafeAreaProvider,
//   useSafeAreaInsets,
// } from 'react-native-safe-area-context';

// function App() {
//   const isDarkMode = useColorScheme() === 'dark';

//   return (
//     <SafeAreaProvider>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <AppContent />
//     </SafeAreaProvider>
//   );
// }

// function AppContent() {
//   const safeAreaInsets = useSafeAreaInsets();

//   return (
//     <View style={styles.container}>
//       <NewAppScreen
//         templateFileName="App.tsx"
//         safeAreaInsets={safeAreaInsets}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// export default App;
import { View, Text, Button} from 'react-native';
import React from 'react';
// import First from './src/components/First';
// import Press from './src/components/Press';
// import UseStateHook from './src/components/UseState';
// import Props from './src/components/Props';
// import InputText from './src/components/InputText';
// import Style from './src/components/Style';
// import FlatListScreen from './src/components/FlatListScreen';
// import SectionListScreen from './src/components/SectionListScreen';
// import Login from './src/components/Login';
// import ContactList from './src/screens/contact/ContactList';
// import Grid from './src/components/Grid';
// import ClassComponent from './src/components/ClassComponent';
// import UseEfffectHook from './src/components/UseEfffectHook';
// import UseEffectHookUpdate from './src/components/UseEffectHookUpdate';
// import UseEffectHookUnMount from './src/components/UseEffectHookUnMount';
// import Loader from './src/components/Loader';
// import PressAbleComponent from './src/components/PressAbleComponent';
import StatusBarExample from './src/components/StatusBarExample';
const App = () => {
  return (
    <View style={ { flex: 1} }>
      {/* <Text>----------- X ------------ X ------------</Text>
      <Text style={ { fontSize: 20 } }>----------- Simple Show In Main ------------</Text>
      <Text style={ { fontSize:30 } }>MyApp</Text>
      <Text style={ { fontSize:30 } }>Bilal Mobile App</Text>
      <Button title="Only show simple Button" />

      <Text>----------- X ------------ X ------------</Text>
      <Text style={ { fontSize: 20 } }>----------- Other Commponent in same file ------------</Text>
      <OtherComponent /> */}

      {/* <Text>----------- X ------------ X ------------</Text>
      <Text style={ { fontSize: 20 } }>----------- First Commponent from Src Inherited ------------</Text>
      <First />

      <Text>----------- X ------------ X ------------</Text>
      <Text style={ { fontSize: 20 } }>----------- Press Button Commponent Only show in console ------------</Text>
      <Press /> */}

      {/* <Text>----------- X ------------ X ------------</Text>
      <Text style={ { fontSize: 20 } }>----------- Use State Hook Commponent Run time change values ------------</Text>
      <UseStateHook /> */}

      {/* <Text>----------- X ------------ X ------------</Text>
      <Text style={ { fontSize: 20 } }>----------- Props ------------</Text>
      <Props />

      <Text>----------- X ------------ X ------------</Text>
      <Text style={ { fontSize: 20 } }>----------- Input Filed ------------</Text>
      <InputText />

      <Text>----------- X ------------ X ------------</Text>
      <Text style={ { fontSize: 20 } }>----------- Style ------------</Text>
      <Style />
       */}

      {/* <Text>----------- X ------------ X ------------</Text>
      <Text style={ { fontSize: 20 } }>----------- Flat List ------------</Text>
      <FlatListScreen /> */}

      {/* <Text>----------- X ------------ X ------------</Text>
      <Text style={ { fontSize: 20 } }>----------- Section List ------------</Text>
      <SectionListScreen />
       */}
       
      {/* <Text>----------- X ------------ X ------------</Text>
      <Text style={ { fontSize: 20 } }>----------- Login Form ------------</Text>
      <Login /> */}
      
      
      {/* <Text>----------- X ------------ X ------------</Text>
      <Text style={ { fontSize: 20 } }>----------- Contact List ------------</Text>
      <ContactList /> */}

      {/* <Text>----------- X ------------ X ------------</Text>
      <Text style={ { fontSize: 20 } }>-----------Grid ------------</Text>
      <Grid /> */}
       
      {/* <ClassComponent/> */}

      {/* <UseEfffectHook/> */}

      {/* <UseEffectHookUpdate/> */}

      {/* <UseEffectHookUnMount/> */}

      {/* <Loader/> */}

      {/* <PressAbleComponent/> */}
      
      <StatusBarExample/>
    </View>
  );
};

// Other commponent 
const OtherComponent = () => {
  return (
    <View>
      <Text style={ { fontSize:30 } }>Other Component</Text>
    </View>
  );
};
export default App;