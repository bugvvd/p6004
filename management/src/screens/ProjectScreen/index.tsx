import React from 'react';

// components
import {StyleSheet, ScrollView, useWindowDimensions} from 'react-native';
import Card from '../../components/Card';

// types
import {ProjectScreenProps} from '../types';

const ProjectScreen = ({
  navigation,
  route,
}: ProjectScreenProps): JSX.Element => {
  const {height, width} = useWindowDimensions();
  return (
    <ScrollView contentContainerStyle={styles(height, width).container}>
      <Card
        priority="regular"
        title="梅花园"
        description="1号楼/2号楼"
        operable
      />
      <Card
        priority="regular"
        title="百合花园"
        description="1号楼/2号楼/3号楼"
        operable
      />
      <Card
        priority="regular"
        title="钦汇园"
        description="70号/71号"
        operable
      />
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

export default ProjectScreen;
