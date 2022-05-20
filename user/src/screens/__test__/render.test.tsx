import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import ChatRoomScreen from '../ChatRoomScreen';
import LoginScreen from '../LoginScreen';
import RegisterScreen from '../RegisterScreen';
import ScanScreen from '../ScanScreen';
import SettingScreen from '../SettingScreen';
import UnitDetailScreen from '../UnitDetailScreen';

describe('Screen rendering correctly', () => {
  it('should render chatroom screen', () => {
    let props: any;
    const {getAllByText} = render(<ChatRoomScreen {...props} />);
    const content = getAllByText('ChatRoomScreen');
    expect(content.length).toBe(1);
  });

  it('should render login screen', () => {
    let props: any;
    const {getAllByText} = render(<LoginScreen {...props} />);
    const content = getAllByText('LoginScreen');
    expect(content.length).toBe(1);
  });

  it('should render register screen', () => {
    let props: any;
    const {getAllByText} = render(<RegisterScreen {...props} />);
    const content = getAllByText('RegisterScreen');
    expect(content.length).toBe(1);
  });
  it('should render scan screen', () => {
    let props: any;
    const {getAllByText} = render(<ScanScreen {...props} />);
    const content = getAllByText('ScanScreen');
    expect(content.length).toBe(1);
  });
  it('should render setting screen', () => {
    let props: any;
    const {getAllByText} = render(<SettingScreen {...props} />);
    const content = getAllByText('SettingScreen');
    expect(content.length).toBe(1);
  });
  it('should render unit detial screen', () => {
    let props: any;
    const {getAllByText} = render(
      <UnitDetailScreen {...props} route={{params: {unitId: '101'}}} />,
    );
    const content = getAllByText('UnitDetailScreen');
    expect(content.length).toBe(1);
  });
});
