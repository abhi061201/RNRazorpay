import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './src/navigation/AppNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <RootStack></RootStack>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
