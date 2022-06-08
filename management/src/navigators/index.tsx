import React from 'react';

// components
import {NavigationContainer} from '@react-navigation/native';
import AuthStackNavigator from './AuthStackNavigator';
import MainStackNavigator from './MainStackNavigator';

// redux
import {useAppSelector} from '../redux/typedReduxHooks';

const Navigator = (): JSX.Element => {
  const isLoggedIn: boolean = useAppSelector(state => state.loginState.isLoggedIn);  
  return isLoggedIn ? <MainStackNavigator /> : <AuthStackNavigator />;
};

const Root = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
};

export default Root;
