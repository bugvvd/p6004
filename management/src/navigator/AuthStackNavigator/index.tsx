import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../../screen/LoginScreen';
import RegisterScreen from '../../screen/RegisterScreen';
import ScanScreen from '../../screen/ScanScreen';

import { AuthStackParamList } from '../types';


const Stack = createStackNavigator<AuthStackParamList>();

export default function AuthStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Scan" component={ScanScreen} />
    </Stack.Navigator>
  );
}
