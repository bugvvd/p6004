// core
import React from 'react';

// components
import {View, Text} from 'react-native';

// types
import {UnitDetailScreenProps} from '../../../lib/types/screen';

export default function UnitDetailScreen({
  navigation,
  route,
}: UnitDetailScreenProps) {
  return (
    <View>
      <Text>UnitDetailScreen</Text>
    </View>
  );
}
