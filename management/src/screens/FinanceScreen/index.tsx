import React from 'react';

// components
import {View, Text} from 'react-native';

// types
import type {FinanceScreenProps} from '../types';

const FinanceScreen = ({
  navigation,
  route,
}: FinanceScreenProps): JSX.Element => {
  return (
    <View>
      <Text>FinanceScreen</Text>
    </View>
  );
};

export default FinanceScreen;
