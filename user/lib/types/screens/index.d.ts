import type {CompositeNavigationProp} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {DrawerScreenProps} from '@react-navigation/drawer';

import type {
  AuthStackParamList,
  MainDrawerParamList,
  MainStackParamList,
} from '../navigators';

/**
 * Multi-Usage Screens
 */

export declare type ScanScreenProps = NativeStackScreenProps<>;

/**
 * Auth Stack Screens
 */

export declare type LoginScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  'Login'
>;

export declare type RegisterScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  'Register'
>;

/**
 * Main Stack Screens
 */

export declare type ChatRoomScreenProps = NativeStackScreenProps<
  MainStackParamList,
  'ChatRoom'
>;

export declare type UnitDetailScreenProps = NativeStackScreenProps<
  MainStackParamList,
  'UnitDetail'
>;

/**
 * Main Drawer Screens
 */

export declare type HomeScreenProps = DrawerScreenProps<
  MainDrawerParamList,
  'Home'
>;

export declare type SettingScreenProps = DrawerScreenProps<
  MainDrawerParamList,
  'Setting'
>;
