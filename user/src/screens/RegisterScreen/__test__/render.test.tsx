import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import RegisterScreen from '..';

describe('RegisterScreen', () => {
  /* render */
  it('should render', () => {
    let props: any;
    render(<RegisterScreen {...props} />);
  });
  // TODO: What to test?
});
