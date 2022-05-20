import React from 'react';
import {View, Text} from 'react-native';
import type {RecentScreenProps} from '../../../lib/types/screen';

export default function RecentScreen({navigation, route}: RecentScreenProps) {
  return (
    <View>
      <Text>RecentScreen</Text>
      <Text testID='RecentScreenTestID'></Text>
    </View>
  );
}
