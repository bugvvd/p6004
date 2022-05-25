import React from 'react';

// components
import {View, Text} from 'react-native';

// types
import {UnitDetailScreenProps} from '../../../lib/types/screens';

export default function UnitDetailScreen({
  navigation,
  route,
}: UnitDetailScreenProps): JSX.Element {
  return (
    <View>
      <Text>UnitDetailScreen</Text>
    </View>
  );
}
