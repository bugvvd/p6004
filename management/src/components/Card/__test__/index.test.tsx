import {render} from '@testing-library/react-native';
import {} from '@testing-library/jest-native'
import React from 'react';
import Card from '..';
import {CardProps} from '../types.d';

describe('Card', () => {
  it('should render', () => {
    let props: any;
    render(<Card {...props} />);
  });
  it('should render operable icons', () => {
    let testCardProps: CardProps = {
      priority: 'emergency',
      title: 'testTitle',
      description: 'testTitle',
      operable: true,
      enableCall: true,
      enableMessage: true,
      goto: ()=>{}
    };
    const {getByTestId} = render(<Card {...testCardProps} />);
    expect(getByTestId('card-phone')).toBeTruthy();
    expect(getByTestId('card-message')).toBeTruthy();
    expect(getByTestId('card-dots')).toBeTruthy();
  });
  it.todo('should navigate to ProjectDetailScreen on pressing card');
});
