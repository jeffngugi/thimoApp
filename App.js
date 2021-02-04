/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StatusBar,} from 'react-native';
import InitialNavStack from './components/InitialNavStack';

const App  = () => {
  return(
    <NavigationContainer>
      <InitialNavStack />
    </NavigationContainer>
  )
};


export default App;
