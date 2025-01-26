import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './src/navigation/AppNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default App;
