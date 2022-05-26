import React from 'react';

// components
import {View, Text} from 'react-native';

// types
import {SettingScreenProps} from '../types';

const SettingScreen = ({
  navigation,
  route,
}: SettingScreenProps): JSX.Element => {
  return (
    <View>
      <Text>SettingScreen</Text>
    </View>
  );
};

export default SettingScreen;
