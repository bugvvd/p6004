import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';

// redux
import {Provider} from 'react-redux';
import {store} from '../../../redux/store';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

// screen
import LoginScreen from '..';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('LoginScreen', () => {
  /* render */
  it.todo('should render ');
  it.todo("should render if 'isLoggedIn: false' ");
  it.todo("should not render if 'isLoggedIn: true' ");
  it("should render 2 field placeholder: 1 'Username' and 1 'Password'", () => {
    let props: any;
    const {queryAllByPlaceholderText} = render(
      <Provider store={store}>
        <LoginScreen {...props} />
      </Provider>,
    );
    const usernameField = queryAllByPlaceholderText('Username');
    const passwordField = queryAllByPlaceholderText('Password');
    expect(usernameField).toBeTruthy();
    expect(usernameField.length).toEqual(1);
    expect(passwordField).toBeTruthy();
    expect(passwordField.length).toEqual(1);
  });
  it("should render 2 buttons: 1 'Login' and 1 'Register'", () => {
    let props: any;
    const {queryAllByText} = render(
      <Provider store={store}>
        <LoginScreen {...props} />
      </Provider>,
    );
    const loginButton = queryAllByText('Login');
    const registerButton = queryAllByText('Register');
    expect(loginButton).toBeTruthy();
    expect(loginButton.length).toBe(1);
    expect(registerButton).toBeTruthy();
    expect(registerButton.length).toBe(1);
  });

  /* action */
  it("should call 'loginSlice/login' thunk on pressing 'Login' button", async () => {
    let props: any;
    const storeMock = mockStore({});
    const {getByText} = render(
      <Provider store={storeMock}>
        <LoginScreen {...props} />
      </Provider>,
    );
    const loginButton = getByText('Login');
    await waitFor(() => {
      fireEvent.press(loginButton);
    });
    const actionMock = storeMock.getActions();
    expect(actionMock.length).toBe(2);
    expect(actionMock[0].type).toEqual('loginSlice/login/pending');
    expect(actionMock[1].type).toEqual('loginSlice/login/fulfilled');
    // Field value varies by loginPayload
    expect(Object.keys(actionMock[1].payload)).toEqual([
      'username',
      'token',
      'license',
    ]);
  });
  it("should call 'navigation.navigate()' to RegisterScreen on pressing 'Register' Button", async () => {
    let props: any;
    const navigateMock = jest.fn();
    const {getByText} = render(
      <Provider store={store}>
        <LoginScreen {...props} navigation={{navigate: navigateMock}} />
      </Provider>,
    );
    const registerButton = getByText('Register');
    await waitFor(() => {
      fireEvent.press(registerButton);
    });
    expect(navigateMock).toHaveBeenCalledWith('Register');
  });

  /* API usage */
  it.todo("should call login API pressing 'Login' button");
  /* exception handling */
  it.todo('loginSlice/login thunk time out handling');
});
