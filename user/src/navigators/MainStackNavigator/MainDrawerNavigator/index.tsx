import React from 'react';

// components
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../../../screens/HomeScreen';
import SettingScreen from '../../../screens/SettingScreen';

// types
import {MainDrawerParamList} from '../../types';

const Drawer = createDrawerNavigator<MainDrawerParamList>();

export default function MainDrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{swipeEnabled: false}}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Setting" component={SettingScreen} />
    </Drawer.Navigator>
  );
}
