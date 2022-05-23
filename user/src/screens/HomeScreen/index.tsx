// core
import React from 'react';

// components
import {View, Text} from 'react-native';

// types
import {HomeScreenProps} from '../../../lib/types/screen';

export default function HomeScreen({navigation, route}: HomeScreenProps) {
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
}
