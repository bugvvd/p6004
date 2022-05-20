import React from 'react';
import {View, Text} from 'react-native';

import type {ChatRoomScreenProps} from '../../../lib/types/screen';

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
