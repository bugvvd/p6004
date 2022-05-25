import React from 'react';

// components
import {View, Text} from 'react-native';

// types
import {ScanScreenProps} from '../../../lib/types/screens';

export default function ScanScreen({
  navigation,
  route,
}: ScanScreenProps): JSX.Element {
  return (
    <View>
      <Text>ScanScreen</Text>
    </View>
  );
}
