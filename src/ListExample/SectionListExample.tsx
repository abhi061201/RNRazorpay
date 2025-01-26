import {
  Dimensions,
  FlatList,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useRef} from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

type ListItem = {
  title: string;
  data: string[];
};
const {height, width} = Dimensions.get('screen');
const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

const SectionListExample = () => {
  function renderComp({item}) {
    return (
      <View style={styles.item}>
        <Text style={styles.item}>{item}</Text>
      </View>
    );
  }
  function stickyHeaderComponent({section}: {section: ListItem}) {
    return (
      <View>
        <Text>{section.title}</Text>
      </View>
    );
  }
  return (
    <SafeAreaView>
      <View style={{padding: 20}}>
        <SectionList
          stickySectionHeadersEnabled={true}
          sections={DATA}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item + index}
          renderItem={renderComp}
          renderSectionHeader={stickyHeaderComponent} />
      </View>
    </SafeAreaView>
  );
};

export default SectionListExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});
