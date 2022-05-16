import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeTabNavigator from '../HomeTabNavigator';
import SettingScreen from '../../../screen/SettingScreen';
import FinanceScreen from '../../../screen/FinanceScreen';

import {MainDrawerParamList} from '../../types';

const Drawer = createDrawerNavigator<MainDrawerParamList>();

const MainDrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeTabNavigator} />
      <Drawer.Screen name="Setting" component={SettingScreen} />
      <Drawer.Screen name="Finance" component={FinanceScreen} />
    </Drawer.Navigator>
  );
};

export default MainDrawerNavigator;
