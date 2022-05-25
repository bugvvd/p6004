import React from 'react';

// components
import {View, Text} from 'react-native';

// types
import {RegisterScreenProps} from '../../../lib/types/screens';

export default function RegisterScreen({
  navigation,
  route,
}: RegisterScreenProps): JSX.Element {
  return (
    <View>
      <Text>RegisterScreen</Text>
    </View>
  );
}
