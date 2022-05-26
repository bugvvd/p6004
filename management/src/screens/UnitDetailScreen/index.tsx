import React from 'react';

// components
import {View, Text} from 'react-native';

// types
import {UnitDetailScreenProps} from '../types';

const UnitDetailScreen = ({
  navigation,
  route,
}: UnitDetailScreenProps): JSX.Element => {
  return (
    <View>
      <Text>UnitDetailScreen</Text>
    </View>
  );
};

export default UnitDetailScreen;
