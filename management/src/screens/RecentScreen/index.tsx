import React from 'react';

// components
import {View, Text} from 'react-native';

// types
import type {RecentScreenProps} from '../types';

const RecentScreen = ({navigation, route}: RecentScreenProps): JSX.Element => {
  return (
    <View>
      <Text>RecentScreen</Text>
      <Text testID="RecentScreenTestID"></Text>
    </View>
  );
};

export default RecentScreen;
