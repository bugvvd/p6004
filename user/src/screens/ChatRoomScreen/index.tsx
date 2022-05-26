import React from 'react';

// components
import {View, Text} from 'react-native';

// types
import {ChatRoomScreenProps} from '../types';

const ChatRoomScreen = ({
  navigation,
  route,
}: ChatRoomScreenProps): JSX.Element => {
  return (
    <View>
      <Text>ChatRoomScreen</Text>
    </View>
  );
};

export default ChatRoomScreen;
