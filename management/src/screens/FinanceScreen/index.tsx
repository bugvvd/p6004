
import React from 'react';

// components
import {View, Text} from 'react-native';

// types
import type {FinanceScreenProps} from '../../../lib/types/screen';

export default function FinanceScreen({navigation, route}: FinanceScreenProps) {
  return (
    <View>
      <Text>FinanceScreen</Text>
    </View>
  );
}
