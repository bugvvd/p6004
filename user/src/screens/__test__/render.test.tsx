import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import ChatRoomScreen from '../ChatRoomScreen';
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

  it('should render scan screen', () => {
    let props: any;
    const {getAllByText} = render(<ScanScreen {...props} />);
    const content = getAllByText('ScanScreen');
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
