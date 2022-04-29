import React from 'react';
import {View, Text} from 'react-native';

import {ChatRoomScreenProps} from '../types';

export default function ChatRoomScreen({
  route,
  navigation,
}: ChatRoomScreenProps) {
  return (
    <View>
      <Text>ChatRoomScreen</Text>
    </View>
  );
}
