import {fireEvent, render, waitFor} from '@testing-library/react-native';
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
      priority: 'high',
      title: 'testTitle',
      description: 'testDescription',
      operable: true,
      enableCall: true,
      enableMessage: true,
      goto: () => {},
      testID: 'testCardID'
    };
    const {getByTestId, getByText} = render(<Card {...testCardProps} />);
    expect(getByTestId('card-phone')).toBeTruthy();
    expect(getByTestId('card-message')).toBeTruthy();
    expect(getByTestId('card-dots')).toBeTruthy();
    expect(getByText('testTitle')).toBeTruthy();
    expect(getByText('testDescription')).toBeTruthy();
  });
  it('should file goto callback on pressing card', async () => {
    const navigateMock = jest.fn();
    let props: any;
    let testCardProps: CardProps = {
      priority: 'high',
      title: 'testTitle',
      description: 'testTitle',
      operable: true,
      enableCall: true,
      enableMessage: true,
      goto: navigateMock,
      testID: 'testCardID',
    };
    const {getByTestId, getByText} = render(<Card {...testCardProps} />);
    await waitFor(() => {
      fireEvent.press(getByTestId('testCardID'));
    });
    expect(navigateMock).toHaveBeenCalledTimes(1);
  });
});
