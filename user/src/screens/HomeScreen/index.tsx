import React from 'react';

// components
import {ScrollView, StyleSheet} from 'react-native';
import Card from '../../components/Card';

// types
import {HomeScreenProps} from '../types';

const demoUnitCard = [];

const HomeScreen = ({navigation, route}: HomeScreenProps): JSX.Element => {
  return <ScrollView contentContainerStyle={styles.container}></ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
});

export default HomeScreen;
