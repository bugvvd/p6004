import React from 'react';

// components
import {ScrollView, StyleSheet, useWindowDimensions} from 'react-native';
import Card from '../../components/Card';

// types
import {HomeScreenProps} from '../types';

const cardFormat = [
  {
    priority: '',
    title: '',
    description: '',
    goto: () => {},
    testID: '',
  },
];

const HomeScreen = ({navigation, route}: HomeScreenProps): JSX.Element => {
  const {height, width} = useWindowDimensions();
  return (
    <ScrollView contentContainerStyle={styles(height, width).container}>
      <Card
        priority="high"
        title="紧急通知！！"
        description="防疫工作政策"
        goto={() => {
          console.log('goto emergency post page');
        }}
        testID="h_1"
      />
      <Card
        priority="medium"
        operable
        title="新的团购优已到账"
        description="点击查看详情"
        goto={() => {}}
        testID="m_1"
      />
      <Card
        priority="medium"
        title="您本月的新账单已形成"
        description="点击查看详情"
        goto={() => {}}
        testID="m_2"
      />
      <Card
        priority="low"
        title="梅花园"
        description="一号楼/102"
        operable
        enableCall
        enableMessage
        goto={() => {
          navigation.navigate('UnitDetail', {unitID: 'MHY-1-102'});
        }}
        testID="l_1"
      />
      <Card
        priority="low"
        title="梅花园"
        description="一号楼/604"
        operable
        enableCall
        enableMessage
        goto={() => {
          navigation.navigate('UnitDetail', {unitID: 'MHY-1-604'});
        }}
        testID="l_2"
      />
      <Card
        priority="low"
        title="钦汇园"
        description="71号/8001"
        operable
        enableCall
        enableMessage
        goto={() => {
          navigation.navigate('UnitDetail', {unitID: 'QHY-71-8001'});
        }}
        testID="l_3"
      />
      <Card
        priority="low"
        title="百合花园"
        description="1号楼/909B"
        operable
        enableCall
        enableMessage
        goto={() => {
          navigation.navigate('UnitDetail', {unitID: 'BHHY-1-909B'});
        }}
        testID="l_4"
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

export default HomeScreen;
