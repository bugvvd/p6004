
import React from 'react';

// components
import {View, Text} from 'react-native';

// types
import {ChatRoomScreenProps} from '../../../lib/types/screens';

export default function ChatRoomScreen({
  navigation,
  route,
}: ChatRoomScreenProps): JSX.Element {
  return (
    <View>
      <Text>ChatRoomScreen</Text>
    </View>
  );
}
