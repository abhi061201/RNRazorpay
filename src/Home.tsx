import {Button, StyleSheet, Text, View} from 'react-native';
import React, {memo, useEffect, useState} from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  const [count, setCount] = useState(0);
  const [temp, setTemp] = useState(0);
  // useEffect(() => {
  //   console.log('when this component mount');
  //   setTimeout(() => {
  //     setCount(prev => prev + 1);
  //   }, 1000);

  //   return () => {
  //     console.log('component unmounted');
  //   };
  // }, []);

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      console.log('HomeScreen focus effect');

      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
        console.log('HomeScreen focus effect cleanup');
      };
    }, []),
  );
  const renderFunction = () => {
    setTemp(prev => prev + 1);
  };
  return (
    <View>
      <Text>Hello world {count}</Text>
      {/* <ChildComponent num={1}></ChildComponent> */}
      <Button
        title="Click"
        onPress={() => {
          navigation.navigate('Screen1');
        }}
      />
      <Button title="Click" onPress={renderFunction} />
    </View>
  );
};

const ChildComponent = memo(({num}: {num: number}) => {
  console.log('Child Component rendered');
  useEffect(() => {
    console.log('child Component useEffect called');
  }, []);
  return (
    <View>
      <Text>Child component text {num}</Text>
    </View>
  );
});
export default Home;

const styles = StyleSheet.create({});
