import React from 'react';
import {View, Text} from 'react-native';

import {ChatRoomScreenProps} from '../../../lib/types/screen';

export default function ChatRoomScreen({
  navigation,
  route,
}: ChatRoomScreenProps) {
  return (
    <View>
      <Text>ChatRoomScreen</Text>
    </View>
  );
}
