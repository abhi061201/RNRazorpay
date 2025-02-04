import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Home';
import Screen1 from '../Screen1';
import FlatListExample from '../ListExample/FlatListExample';
import SectionListExample from '../ListExample/SectionListExample';
import PaymentGateway from '../PaymentGateway';

const Stack = createNativeStackNavigator();
const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName="Payment_GateWay">
      <Stack.Screen name="HomeScreen" component={Home} initialParams={{}} />
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="FlatListScreen" component={FlatListExample} />
      <Stack.Screen name="SectionListExample" component={SectionListExample} />
      <Stack.Screen name={'Payment_GateWay'} component={PaymentGateway} />
    </Stack.Navigator>
  );
};

export default RootStack;

const styles = StyleSheet.create({});
