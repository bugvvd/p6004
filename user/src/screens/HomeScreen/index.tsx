import React from 'react';

// components
import {View, Text} from 'react-native';

// types
import {HomeScreenProps} from '../types';

const HomeScreen = ({navigation, route}: HomeScreenProps): JSX.Element => {
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
