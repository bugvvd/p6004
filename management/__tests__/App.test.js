import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {render, waitFor} from '@testing-library/react-native';

import App from '../App';
import Root from '../src/navigator';
import MainStackNavigator from '../src/navigator/MainStackNavigator';
import MainDrawerNavigator from '../src/navigator/MainStackNavigator/MainDrawerNavigator';

import renderer from 'react-test-renderer';



// ...
test('renders the correctly', () => {
  const tree = renderer.create(<App />).toJSON();
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

  it('MainDrawer contains a buttons linking to other screens', async () => {
    const component = (
      <NavigationContainer>
        <MainDrawerNavigator />
      </NavigationContainer>
    );

    const {findByText} = render(component);
    const setting = await findByText('Setting');
    const finance = await findByText('Finance');
    expect(setting).toBeTruthy();
    expect(finance).toBeTruthy();

  });
});
