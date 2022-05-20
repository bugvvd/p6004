import type {CompositeNavigationProp} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {DrawerScreenProps} from '@react-navigation/drawer';

import type {
  AuthStackParamList,
  MainDrawerParamList,
  MainStackParamList,
} from '../navigator';

/**
 * Multi-Usage Screens
 */

export type ScanScreenProps = NativeStackScreenProps<>;

/**
 * Auth Stack Screens
 */

export type LoginScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  'Login'
>;

export type RegisterScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  'Register'
>;

/**
 * Main Stack Screens
 */

export type ChatRoomScreenProps = NativeStackScreenProps<
  MainStackParamList,
  'ChatRoom'
>;

export type UnitDetailScreenProps = NativeStackScreenProps<
  MainStackParamList,
  'UnitDetail'
>;

/**
 * Main Drawer Screens
 */

export type HomeScreenProps = DrawerScreenProps<MainDrawerParamList, 'Home'>;

export type SettingScreenProps = DrawerScreenProps<
  MainDrawerParamList,
  'Setting'
>;
