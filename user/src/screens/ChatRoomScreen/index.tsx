// core
import React from 'react';

// components
import {View, Text} from 'react-native';

// types
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
