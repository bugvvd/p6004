import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {MainStackParamList} from '../navigator/types';

export type ChatRoomScreenProps = NativeStackScreenProps<
  MainStackParamList,
  'ChatRoom'
>;

export type UnitDetailScreenProps = NativeStackScreenProps<
  MainStackParamList,
  'UnitDetail'
>;
