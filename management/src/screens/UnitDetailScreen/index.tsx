import React from 'react';
import {View, Text} from 'react-native';

import {UnitDetailScreenProps} from '../../../lib/types/screen';

export default function UnitDetailScreen({
  route,
  navigation,
}: UnitDetailScreenProps) {
  let unitId = route.params.unitId;
  return (
    <View>
      <Text>UnitDetailScreen</Text>
      <Text>{unitId}</Text>
      <Text>{unitId}</Text>
    </View>
  );
}
