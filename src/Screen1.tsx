import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const Screen1 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Screen component mount');
    setTimeout(() => {
      setCount(prev => prev + 1);
    }, 1000);

    return () => {
      console.log('Screen component unmounted');
    };
  }, []);
  return (
    <View>
      <Text>Screen1 {count}</Text>
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({});
