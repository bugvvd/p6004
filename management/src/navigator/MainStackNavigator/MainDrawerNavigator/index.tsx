import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeTabNavigator from '../HomeTabNavigator';
import SettingScreen from '../../../screen/SettingScreen';

import { MainDrawerParamList } from '../../types';

const Drawer = createDrawerNavigator<MainDrawerParamList>();

export default function MainDrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeTabNavigator} />
      <Drawer.Screen name="Setting" component={SettingScreen} />
    </Drawer.Navigator>
  );
}
