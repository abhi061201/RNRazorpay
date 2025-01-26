import {Dimensions, FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

type ListItem = {
  in: number;
  id: string;
  title: string;
};
const {height, width} = Dimensions.get('screen');
const List: ListItem[] = [
  {
    in: 0,
    id: 'child1',
    title: 'Child1',
  },
  {
    in: 1,
    id: 'child2',
    title: 'Child2',
  },
  {
    id: 'child1',
    title: 'Child1',
    in: 2,
  },
  {
    id: 'child2',
    title: 'Child2',
    in: 3,
  },
  {
    id: 'child1',
    title: 'Child1',
    in: 4,
  },
  {
    id: 'child2',
    title: 'Child2',
    in: 5,
  },
  {
    id: 'child1',
    title: 'Child1',
    in: 6,
  },
  {
    id: 'child2',
    title: 'Child2',
    in: 7,
  },
  {
    id: 'child1',
    title: 'Child1',
    in: 8,
  },
  {
    id: 'child2',
    title: 'Child2',
    in: 9,
  },
  {
    id: 'child1',
    title: 'Child1',
    in: 10,
  },
  {
    id: 'child2',
    title: 'Child2',
    in: 11,
  },
  {
    id: 'child2',
    title: 'Child2',
    in: 12,
  },
  {
    id: 'child1',
    title: 'Child1',
    in: 13,
  },
  {
    id: 'child2',
    title: 'Child2',
    in: 14,
  },
  {
    id: 'child1',
    title: 'Child1',
    in: 15,
  },
  {
    id: 'child2',
    title: 'Child2',
    in: 16,
  },
  {
    in: 0,
    id: 'child1',
    title: 'Child1',
  },
  {
    in: 1,
    id: 'child2',
    title: 'Child2',
  },
  {
    id: 'child1',
    title: 'Child1',
    in: 2,
  },
  {
    id: 'child2',
    title: 'Child2',
    in: 3,
  },
  {
    id: 'child1',
    title: 'Child1',
    in: 4,
  },
  {
    id: 'child2',
    title: 'Child2',
    in: 5,
  },
  {
    id: 'child1',
    title: 'Child1',
    in: 6,
  },
  {
    id: 'child2',
    title: 'Child2',
    in: 7,
  },
  {
    id: 'child1',
    title: 'Child1',
    in: 8,
  },
  {
    id: 'child2',
    title: 'Child2',
    in: 9,
  },
  {
    id: 'child1',
    title: 'Child1',
    in: 10,
  },
  {
    id: 'child2',
    title: 'Child2',
    in: 11,
  },
  {
    id: 'child2',
    title: 'Child2',
    in: 12,
  },
  {
    id: 'child1',
    title: 'Child1',
    in: 13,
  },
  {
    id: 'child2',
    title: 'Child2',
    in: 14,
  },
  {
    id: 'child1',
    title: 'Child1',
    in: 15,
  },
  {
    id: 'child2',
    title: 'Child2',
    in: 16,
  },
];

const Child1 = () => {
  return (
    <View style={{height: 50, backgroundColor: 'green', margin: 10}}>
      <Text>Child1</Text>
    </View>
  );
};
const Child2 = () => {
  return (
    <View style={{height: 50, backgroundColor: 'red', margin: 10}}>
      <Text>Child2</Text>
    </View>
  );
};
const FlatListExample = () => {
  const flatlistRef = useRef();
  function renderComp({item}: {item: ListItem}) {
    switch (item.id) {
      case 'child1':
        return <Child1></Child1>;
      default:
        return <Child2></Child2>;
    }
  }
  return (
    <SafeAreaView>
      <View style={{padding: 20}}>
        <FlatList
          ref={flatlistRef}
          refreshing={false}
          removeClippedSubviews={true}
          onRefresh={() => {
            console.log('refresh');
          }}
          showsVerticalScrollIndicator={false}
          data={List}
          getItemLayout={(data, index) => ({
            length: 10,
            offset: 10 * index,
            index,
          })}
          windowSize={21}
          renderItem={renderComp}
          keyExtractor={(item, index) => item.in + index}></FlatList>
      </View>
    </SafeAreaView>
  );
};

export default FlatListExample;

const styles = StyleSheet.create({});
