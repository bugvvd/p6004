import type {CompositeNavigationProp} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {DrawerScreenProps} from '@react-navigation/drawer';
import type {MaterialBottomTabScreenProps} from '@react-navigation/material-bottom-tabs';

import type {
  AuthStackParamList,
  HomeTabParamList,
  MainDrawerParamList,
  MainStackParamList,
  ProjectStackParamList,
} from '../navigators/types';

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

export declare type FinanceScreenProps = DrawerScreenProps<
  MainDrawerParamList,
  'Finance'
>;

export declare type HomeScreenProps = DrawerScreenProps<
  MainDrawerParamList,
  'Home'
>;

export declare type SettingScreenProps = DrawerScreenProps<
  MainDrawerParamList,
  'Setting'
>;

/**
 * Home Tab Screens
 */

export declare type RecentScreenProps = MaterialBottomTabScreenProps<
  HomeTabParamList,
  'Recent'
>;

/**
 * Project Stack Screens
 */

export declare type ProjectScreenProps = NativeStackScreenProps<
  ProjectStackParamList,
  'Project'
>;

export declare type ProjectDetailScreenProps = NativeStackScreenProps<
  ProjectStackParamList,
  'ProjectDetail'
>;
