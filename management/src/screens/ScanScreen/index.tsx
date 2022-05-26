import React from 'react';

// components
import {View, Text} from 'react-native';

// types
import {ScanScreenProps} from '../types';

const ScanScreen = ({navigation, route}: ScanScreenProps): JSX.Element => {
  return (
    <View>
      <Text>ScanScreen</Text>
    </View>
  );
};

export default ScanScreen;
