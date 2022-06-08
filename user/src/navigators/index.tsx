import React from 'react';

// components
import {NavigationContainer} from '@react-navigation/native';
import AuthStackNavigator from './AuthStackNavigator';
import MainStackNavigator from './MainStackNavigator';

// redux
import {useAppSelector} from '../redux/typedReduxHooks';

function Navigator() {
  const isLoggedIn: boolean = useAppSelector(
    state => state.loginState.isLoggedIn,
  );
  return isLoggedIn ? <MainStackNavigator /> : <AuthStackNavigator />;
}

export default function Root() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}
