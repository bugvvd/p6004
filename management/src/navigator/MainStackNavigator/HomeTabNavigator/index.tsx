import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {HomeTabParamList} from '../../types';

import RecentScreen from '../../../screen/RecentScreen';
import ProjectScreen from '../../../screen/ProjectScreen';

const Tab = createMaterialTopTabNavigator<HomeTabParamList>();

export default function HomeTabNavigator() {
  return (
    <Tab.Navigator initialRouteName="Recent">
      <Tab.Screen name="Recent" component={RecentScreen} />
      <Tab.Screen name="Project" component={ProjectScreen} />
    </Tab.Navigator>
  );
}
