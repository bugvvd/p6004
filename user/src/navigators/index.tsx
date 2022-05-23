// core
import React from 'react';

// components
import {NavigationContainer} from '@react-navigation/native';
import AuthStackNavigator from './AuthStackNavigator';
import MainStackNavigator from './MainStackNavigator';

let isLoggedIn = false;

function Navigator() {
  return isLoggedIn ? <MainStackNavigator /> : <AuthStackNavigator />;
}

export default function Root() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}
