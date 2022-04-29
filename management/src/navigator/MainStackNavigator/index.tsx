import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MainDrawerNavigator from '../MainStackNavigator/MainDrawerNavigator';
import ChatRoomScreen from '../../screen/ChatRoomScreen';
import ScanScreen from '../../screen/ScanScreen';
import UnitDetailScreen from '../../screen/UnitDetailScreen';

import {MainStackParamList} from '../types';

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
