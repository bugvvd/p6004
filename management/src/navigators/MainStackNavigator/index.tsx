import React from 'react';

// components
import {createStackNavigator} from '@react-navigation/stack';
import MainDrawerNavigator from './MainDrawerNavigator';
import ChatRoomScreen from '../../screens/ChatRoomScreen';
import ScanScreen from '../../screens/ScanScreen';
import UnitDetailScreen from '../../screens/UnitDetailScreen';

// types
import {MainStackParamList} from './types';
import ProjectDetailScreen from '../../screens/ProjectDetailScreen';

const Stack = createStackNavigator<MainStackParamList>();

export default function MainStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="MainDrawer">
      <Stack.Screen
        name="MainDrawer"
        component={MainDrawerNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen name="ChatRoom" component={ChatRoomScreen} />
      <Stack.Screen name="Scan" component={ScanScreen} />
      <Stack.Screen name="UnitDetail" component={UnitDetailScreen} />
    </Stack.Navigator>
  );
}
