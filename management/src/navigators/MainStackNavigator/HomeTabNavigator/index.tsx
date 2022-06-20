
import React from 'react';

// components
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import RecentScreen from '../../../screens/RecentScreen';

// types
import {HomeTabParamList} from './types';
import ProjectStackNavigator from './ProjectStackNavigator';

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
        name="ProjectStack"
        component={ProjectStackNavigator}
        options={{tabBarTestID: 'project_stack'}}
      />
    </Tab.Navigator>
  );
}
