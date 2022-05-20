import React from 'react';
import {View, Text} from 'react-native';

import {UnitDetailScreenProps} from '../../../lib/types/screen';

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
