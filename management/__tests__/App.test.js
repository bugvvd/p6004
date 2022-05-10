import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {render, fireEvent, waitFor} from '@testing-library/react-native';

import App from '../App';
import Root from '../src/navigator';
import MainStackNavigator from '../src/navigator/MainStackNavigator';
import MainDrawerNavigator from '../src/navigator/MainStackNavigator/MainDrawerNavigator';

import renderer from 'react-test-renderer';

// const homepageErrors = console.error.bind(console.error)
// beforeAll(() => {
//   console.error = errormessage => {
//     /*
//       if error is a proptype error and includes the following string: `Warning: Failed prop type:`
//       suppress the error and don't show it
//       if it is not a proptype error, we show it
//     */
//     const suppressedErrors = errormessage
//       .toString()
//       .includes("Warning: Failed prop type:")

//     // !suppressedErrors && homepageErrors(errormessage)
//   }
// })
// afterAll(() => {
//   console.error = homepageErrors
// })


// ...
test('renders the correctly', async () => {
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
