
import React from 'react';

// components
import {View, Text} from 'react-native';

// types
import {UnitDetailScreenProps} from '../../../lib/types/screen';

export default function UnitDetailScreen({
  navigation,
  route,
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
