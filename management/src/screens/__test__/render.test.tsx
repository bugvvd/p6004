import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import ChatRoomScreen from '../ChatRoomScreen';
import FinancScreen from '../FinanceScreen';
import ProjectDetailScreen from '../ProjectDetailScreen';
import ProjectScreen from '../ProjectScreen';
import RecentScreen from '../RecentScreen';
import ScanScreen from '../ScanScreen';
import UnitDetailScreen from '../UnitDetailScreen';

describe('Screen rendering correctly', () => {
  it('should render chatroom screen', () => {
    let props: any;
    const {getAllByText} = render(<ChatRoomScreen {...props} />);
    const content = getAllByText('ChatRoomScreen');
    expect(content.length).toBe(1);
  });

  it('should render finance screen', () => {
    let props: any;
    const {getAllByText} = render(<FinancScreen {...props} />);
    const content = getAllByText('FinanceScreen');
    expect(content.length).toBe(1);
  });

  it('should render project detail screen', () => {
    let props: any;
    const {getAllByText} = render(<ProjectDetailScreen {...props} />);
    const content = getAllByText('ProjectDetailScreen');
    expect(content.length).toBe(1);
  });
  it('should render project screen', () => {
    let props: any;
    const {getAllByText} = render(<ProjectScreen {...props} />);
    const content = getAllByText('ProjectScreen');
    expect(content.length).toBe(1);
  });
  it('should render recent screen', () => {
    let props: any;
    const {getAllByText} = render(<RecentScreen {...props} />);
    const content = getAllByText('RecentScreen');
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
