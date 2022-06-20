import React from 'react';

// components
import {createStackNavigator} from '@react-navigation/stack';
import ProjectScreen from '../../../../screens/ProjectScreen';
import ProjectDetailScreen from '../../../../screens/ProjectDetailScreen';
import UnitDetailScreen from '../../../../screens/UnitDetailScreen';

// types
import {ProjectStackParamList} from './types';

const Stack = createStackNavigator<ProjectStackParamList>();

export default function ProjectStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Project"
      screenOptions={{headerBackTestID: 'header-back', headerShown: false}}>
      <Stack.Screen name="Project" component={ProjectScreen} />
      <Stack.Screen name="ProjectDetail" component={ProjectDetailScreen} />
      <Stack.Screen name="UnitDetail" component={UnitDetailScreen} />
    </Stack.Navigator>
  );
}
