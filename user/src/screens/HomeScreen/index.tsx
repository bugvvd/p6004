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
      <Card
        priority="emergency"
        title="紧急通知！！"
        description="防疫工作政策"
      />
      <Card
        priority="notification"
        operable
        title="新的团购优已到账"
        description="点击查看详情"
      />
      <Card
        priority="notification"
        title="您本月的新账单已形成"
        description="点击查看详情"
      />
      <Card
        priority="regular"
        title="梅花园"
        description="一号楼/102"
        operable
        enableCall
        enableMessage
      />
      <Card
        priority="regular"
        title="梅花园"
        description="一号楼/604"
        operable
        enableCall
        enableMessage
      />
      <Card
        priority="regular"
        title="钦汇园"
        description="71号/8001"
        operable
        enableCall
        enableMessage
      />
      <Card
        priority="regular"
        title="百合花园"
        description="1号楼/909B"
        operable
        enableCall
        enableMessage
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
