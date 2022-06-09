import React from 'react';

// components
import {ScrollView, StyleSheet} from 'react-native';
import Card from '../../components/Card';

// types
import {HomeScreenProps} from '../types';

const demoUnitCard = [
  {
    title: 'UNIT-1',
    subTitle: 'Subtitle for unit-1',
    content: 'This is the description for unit-1',
  },
  {
    title: 'UNIT-2',
    subTitle: 'Subtitle for unit-2',
    content: 'This is the description for unit-2',
  },
  {
    title: 'UNIT-2',
    subTitle: 'Subtitle for unit-2',
    content: 'This is the description for unit-2',
  },
  {
    title: 'UNIT-2',
    subTitle: 'Subtitle for unit-2',
    content: 'This is the description for unit-2',
  },
  {
    title: 'UNIT-2',
    subTitle: 'Subtitle for unit-2',
    content: 'This is the description for unit-2',
  },
  {
    title: 'UNIT-2',
    subTitle: 'Subtitle for unit-2',
    content: 'This is the description for unit-2',
  },
  {
    title: 'UNIT-2',
    subTitle: 'Subtitle for unit-2',
    content: 'This is the description for unit-2',
  },
];

const HomeScreen = ({navigation, route}: HomeScreenProps): JSX.Element => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {demoUnitCard.map(item => (
        <Card {...item} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
});

export default HomeScreen;
