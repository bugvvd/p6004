import React from 'react';

// components
import {View, Text} from 'react-native';

// types
import {HomeScreenProps} from '../../../lib/types/screens';

export default function HomeScreen({
  navigation,
  route,
}: HomeScreenProps): JSX.Element {
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
}
