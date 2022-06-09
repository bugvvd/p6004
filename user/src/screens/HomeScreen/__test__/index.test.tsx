import React from 'react';
import {act, render, fireEvent, waitFor} from '@testing-library/react-native';

// api
import * as loginAPI from '../../../api/loginRequest';

// screen
import HomeScreen from '..';

// utils
import {renderWithContext} from '../../../../jest/utils/renderWithContext';
import {getStoreWithState} from '../../../redux/store';
import {Provider} from 'react-redux';

describe('LoginScreen', () => {
  beforeEach(() => {
    // jest.useFakeTimers();
  });
  afterEach(() => {
    // jest.useRealTimers();
  });
  /* render */
  it('should render ', () => {
    let props: any;
    renderWithContext(<HomeScreen {...props} />);
  });
});
