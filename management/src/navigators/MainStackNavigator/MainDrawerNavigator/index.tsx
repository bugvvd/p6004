
import React from 'react';

// components
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeTabNavigator from '../HomeTabNavigator';
import SettingScreen from '../../../screens/SettingScreen';
import FinanceScreen from '../../../screens/FinanceScreen';

// types
import {MainDrawerParamList} from '../../../../lib/types/navigator';

const Drawer = createDrawerNavigator<MainDrawerParamList>();

const MainDrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeTabNavigator} />
      <Drawer.Screen name="Finance" component={FinanceScreen} />
      <Drawer.Screen name="Setting" component={SettingScreen} />
    </Drawer.Navigator>
  );
};

export default MainDrawerNavigator;
