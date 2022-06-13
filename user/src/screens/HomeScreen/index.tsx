import React from 'react';

// components
import {ScrollView, StyleSheet, useWindowDimensions} from 'react-native';
import Card from '../../components/Card';

// types
import {HomeScreenProps} from '../types';

const demoUnitCard = [];

const HomeScreen = ({navigation, route}: HomeScreenProps): JSX.Element => {
  const {height, width} = useWindowDimensions();

  return (
    <ScrollView contentContainerStyle={styles(height, width).container}>
      <Card title="123" />
      <Card title="123" />
      <Card title="123" />
    </ScrollView>
  );
};

const styles = (height: number, width: number) =>
  StyleSheet.create({
    container: {
      justifyContent: 'space-between',
      paddingBottom: height / 40,
    },
  });

export default HomeScreen;
