import React from 'react';
import {Provider} from 'react-redux';
import {render} from '@testing-library/react-native';

// store
import {store} from '../../src/redux/store';

export const renderWithContext = (component: JSX.Element) => {
  const utils = render(<Provider store={store}>{component}</Provider>);
  return {store, ...utils};
};
