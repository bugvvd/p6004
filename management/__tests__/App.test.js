import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {render, waitFor} from '@testing-library/react-native';

import App from '../App';
import Root from '../src/navigator';
import MainStackNavigator from '../src/navigator/MainStackNavigator';
import MainDrawerNavigator from '../src/navigator/MainStackNavigator/MainDrawerNavigator';

import renderer from 'react-test-renderer';



// ...
test('renders the correctly', async () => {
  const tree = await renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe('AppStack', () => {
  it('Renders recent screen as initial screen in MainStack', async () => {
    const {getByText} = render(
      <Root>
        <MainStackNavigator />
      </Root>,
    );
    await waitFor(() => getByText('RecentScreen'));
  });

  it('MainDrawer contains a button linking to Setting Screen', async () => {
    const component = (
      <NavigationContainer>
        <MainDrawerNavigator />
      </NavigationContainer>
    );

    const {findByText} = render(component);
    const button = await findByText('Setting');
    expect(button).toBeTruthy();
  });
});
