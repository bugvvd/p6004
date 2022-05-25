
import React from 'react';

// components
import {View, Text} from 'react-native';

// types
import type {RecentScreenProps} from '../../../lib/types/screen';

export default function RecentScreen({navigation, route}: RecentScreenProps) {
  return (
    <View>
      <Text>RecentScreen</Text>
      <Text testID="RecentScreenTestID"></Text>
    </View>
  );
}
