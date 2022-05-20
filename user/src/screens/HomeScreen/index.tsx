import React from 'react';
import {View, Text} from 'react-native';
import {HomeScreenProps} from '../../../lib/types/screen';

export default function HomeScreen({navigation, route}: HomeScreenProps) {
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
}
