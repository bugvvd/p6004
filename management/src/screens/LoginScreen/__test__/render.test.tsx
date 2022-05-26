import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import LoginScreen from '..';

describe('LoginScreen', () => {
  /* render */
  it('should render', () => {
    let props: any;
    render(<LoginScreen {...props} />);
  });
  // TODO: What to test?
});
