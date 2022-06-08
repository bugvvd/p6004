import React from 'react';
import {act, render, fireEvent, waitFor} from '@testing-library/react-native';

// api
import * as loginAPI from '../../../api/loginRequest';

// screen
import LoginScreen from '..';

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
    renderWithContext(<LoginScreen {...props} />);
  });
  it("should render 2 field placeholder: 1 'Username' and 1 'Password'", () => {
    let props: any;
    const {queryAllByPlaceholderText} = renderWithContext(
      <LoginScreen {...props} />,
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
    const {queryAllByText} = renderWithContext(<LoginScreen {...props} />);
    const loginButton = queryAllByText('Login');
    const registerButton = queryAllByText('Register');
    expect(loginButton).toBeTruthy();
    expect(loginButton.length).toBe(1);
    expect(registerButton).toBeTruthy();
    expect(registerButton.length).toBe(1);
  });

  test("'loginRequest' API on pressing 'Login' button", async () => {
    let props: any;
    const loginRequestSpy = jest
      .spyOn(loginAPI, 'loginRequest')
      .mockImplementationOnce(() => Promise.resolve(true));
    const {getByText} = renderWithContext(<LoginScreen {...props} />);
    const loginButton = getByText('Login');
    await waitFor(() => {
      fireEvent.press(loginButton);
    });
    expect(loginRequestSpy).toHaveBeenCalledTimes(1);
    loginRequestSpy.mockRestore();
  });
  /* register */
  it("should call navigation.navigate to RegisterScreen on pressing 'Register' Button", async () => {
    let props: any;
    const navigateMock = jest.fn();
    const {getByText} = renderWithContext(
      <LoginScreen {...props} navigation={{navigate: navigateMock}} />,
    );
    const registerButton = getByText('Register');
    await waitFor(() => {
      fireEvent.press(registerButton);
    });
    expect(navigateMock).toHaveBeenCalledWith('Register');
  });

  /* exception handling */
  it.todo(
    'should show validation error message on validating invalid username',
  );
  it.todo(
    'should show validation error message on validating invalid password',
  );
  it.todo("should show login error message on receiving error from 'loginAPI'");
});
