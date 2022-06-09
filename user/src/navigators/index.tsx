import React from 'react';

// components
import AuthStackNavigator from './AuthStackNavigator';
import MainStackNavigator from './MainStackNavigator';

// redux
import {useAppSelector} from '../redux/typedReduxHooks';

export default function RootNavigator() {
  const isLoggedIn: boolean = useAppSelector(
    state => state.loginState.isLoggedIn,
  );
  return isLoggedIn ? <MainStackNavigator /> : <AuthStackNavigator />;
}
