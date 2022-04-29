import React from 'react';
import {View, Text} from 'react-native';

import {UnitDetailScreenProps} from '../types';

export default function UnitDetailScreen({
  route,
  navigation,
}: UnitDetailScreenProps) {
  return (
    <View>
      <Text>UnitDetailScreen</Text>
    </View>
  );
}
