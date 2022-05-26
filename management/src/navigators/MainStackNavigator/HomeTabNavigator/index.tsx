
import React from 'react';

// components
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import RecentScreen from '../../../screens/RecentScreen';
import ProjectScreen from '../../../screens/ProjectScreen';

// types
import {HomeTabParamList} from './types';

const Tab = createMaterialTopTabNavigator<HomeTabParamList>();

export default function HomeTabNavigator() {
  return (
    <Tab.Navigator initialRouteName="Recent">
      <Tab.Screen
        name="Recent"
        component={RecentScreen}
        options={{tabBarTestID: 'recent'}}
      />
      <Tab.Screen
        name="Project"
        component={ProjectScreen}
        options={{tabBarTestID: 'project'}}
      />
    </Tab.Navigator>
  );
}
