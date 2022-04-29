import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';

import App from '../App';
import Root from '../src/navigator';
import MainStackNavigator from '../src/navigator/MainStackNavigator';

// ...

describe('AppStack', () => {
  it('renders the correct screen', async () => {
    const {getByText} = render(
      <Root>
        <MainStackNavigator />
      </Root>,
    );
    await waitFor(() => getByText('HomeScreen'));
  });
});
