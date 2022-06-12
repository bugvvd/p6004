import React from 'react';
import {act, render, fireEvent, waitFor} from '@testing-library/react-native';
import { Provider } from 'react-redux';
import {renderWithContext} from '../../../../jest/utils/renderWithContext'

// api
import * as logoutAPI from '../../../api/logoutRequest';

// screen
import SettingScreen from '..';

describe('SettingScreen', () => {
  beforeEach(() => {
    // jest.useFakeTimers();
  });
  afterEach(() => {
    // jest.useRealTimers();
  });
  /* render */
  it('should render ', () => {
    let props: any;
    renderWithContext(<SettingScreen {...props} />);
  });
  it("should render titles for basic settings 'Notificaiton', 'About' and 'Logout' ", () => {
    let props: any;
    const {getByText} = renderWithContext(<SettingScreen {...props} />);
    expect(getByText('About')).toBeTruthy();
    expect(getByText('Notification')).toBeTruthy();
    expect(getByText('Logout')).toBeTruthy();
  });
  test.todo('About callback');
  test.todo('Notification callback');
  it("Should setLoginModalVisibleMock: true on pressing 'Logout' button", async () => {
    let props: any;
    const setLoginModalVisibleMock = jest.fn();
    const useStateMock: any = (loginModalVisible: any) => [
      loginModalVisible,
      setLoginModalVisibleMock,
    ];
    let useStateSpy = jest
      .spyOn(React, 'useState')
      .mockImplementationOnce(useStateMock);
    const {getByText} = renderWithContext(<SettingScreen {...props} />);
    const logoutButton = getByText('Logout');
    expect(logoutButton).toBeTruthy();
    fireEvent.press(logoutButton);
    expect(setLoginModalVisibleMock).toHaveBeenCalledTimes(1);
    expect(setLoginModalVisibleMock).toHaveBeenCalledWith(true);
    useStateSpy.mockRestore();
    // setLoginModalVisibleMock.mockRestore();
  });
  it("Should render LogoutModal on pressing 'Logout' button", async () => {
    let props: any;
    const {getByText, queryByLabelText, queryByText} = renderWithContext(
      <SettingScreen {...props} />,
    );
    const logoutList = getByText('Logout');
    let outterArea = queryByLabelText('Close modal');
    expect(logoutList).toBeTruthy();
    expect(outterArea).toBeNull();
    act(() => fireEvent.press(logoutList));
    outterArea = queryByLabelText('Close modal');
    expect(outterArea).toBeTruthy();
    const cancelButton = queryByText(/Cancel/);
    const logoutButton = queryByText(/Yes/);
    expect(cancelButton).toBeTruthy();
    expect(logoutButton).toBeTruthy();
  });
 

  it.todo("should render LogoutModal on pressing 'Logout' button and then disappear on pressing outter arear")
  it.todo(
    'Should dismiss LogoutModal on pressing the outter area of LoginModal',
  );
});
