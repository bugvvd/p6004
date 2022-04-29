import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from '../../../screen/HomeScreen';
import SettingScreen from '../../../screen/SettingScreen';

import { MainDrawerParamList } from '../../types';

const Drawer = createDrawerNavigator<MainDrawerParamList>();

export default function MainDrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Setting" component={SettingScreen} />
    </Drawer.Navigator>
  );
}
