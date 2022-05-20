import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {DrawerScreenProps} from '@react-navigation/drawer';
import type {MaterialTopTabScreenProps} from '@react-navigation/material-top-tabs';

import type {
  AuthStackParamList,
  HomeTabParamList,
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

export type ProjectDetailScreen = NativeStackScreenProps<
  MainStackParamList,
  'ProjectDetail'
>;

export type UnitDetailScreenProps = NativeStackScreenProps<
  MainStackParamList,
  'UnitDetail'
>;

/**
 * Main Drawer Screens
 */

export type FinanceScreenProps = DrawerScreenProps<
  MainDrawerParamList,
  'Finance'
>;

export type PostScreenProps = DrawerScreenProps<MainDrawerParamList, 'Post'>;

export type SettingScreenProps = DrawerScreenProps<
  MainDrawerParamList,
  'Setting'
>;

export type TicketScreenProps = DrawerScreenProps<
  MainDrawerParamList,
  'Ticket'
>;

/**
 * Home Tab Screens
 */

export type RecentScreenProps = MaterialTopTabScreenProps<
  HomeTabParamList,
  'Recent'
>;

export type ProjectScreenProps = MaterialTopTabScreenProps<
  HomeTabParamList,
  'Project'
>;
