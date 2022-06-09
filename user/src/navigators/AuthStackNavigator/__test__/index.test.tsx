import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {Provider} from 'react-redux';

import {store} from '../../../redux/store';
import {act, fireEvent, render, waitFor} from '@testing-library/react-native';
import AuthStackNavigator from '..';

describe('AuthStack Navigator', () => {
  it('should render login screen', async () => {
    render(
      <Provider store={store}>
        <NavigationContainer>
          <AuthStackNavigator />
        </NavigationContainer>
      </Provider>,
    );
  });
  test.todo("'loginRequest' API on pressing 'Login' button");
  // registerScreen elements no loginScreen elements
  test.todo("navigation to RegisterScreen on pressing 'Register' Button");
});
