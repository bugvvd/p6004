import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {renderWithContext} from '../../../../../jest/utils/renderWithContext';
import {Provider} from 'react-redux';

import {store} from '../../../../redux/store';
import {act, fireEvent, render, waitFor} from '@testing-library/react-native';
import MainDrawerNavigator from '..';

describe('AuthStack Navigator', () => {
  it('should render login screen', async () => {
    render(
      <Provider store={store}>
        <NavigationContainer>
          <MainDrawerNavigator />
        </NavigationContainer>
      </Provider>,
    );
  });
  test.todo('');
});
