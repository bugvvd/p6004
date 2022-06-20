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
        priority="low"
        title="梅花园"
        description="1号楼/2号楼"
        operable
        goto={() =>
          navigation.navigate('ProjectDetail', {
            projectID: 'MHY',
          })
        }
        testID="l_1"
      />
      <Card
        priority="low"
        title="百合花园"
        description="1号楼/2号楼/3号楼"
        operable
        goto={() =>
          navigation.navigate('ProjectDetail', {
            projectID: 'BHHY',
          })
        }
        testID="l_2"
      />
      <Card
        priority="low"
        title="钦汇园"
        description="70号/71号"
        operable
        goto={() =>
          navigation.navigate('ProjectDetail', {
            projectID: 'QHY',
          })
        }
        testID="l_3"
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
