import React from 'react';

// components
import {View, Text} from 'react-native';

// types
import {SettingScreenProps} from '../../../lib/types/screens';

export default function SettingScreen({
  navigation,
  route,
}: SettingScreenProps): JSX.Element {
  return (
    <View>
      <Text>SettingScreen</Text>
    </View>
  );
}
