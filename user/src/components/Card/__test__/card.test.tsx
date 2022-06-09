import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';

import Card from '..';

// types
import {CardProps} from '../type';

describe('Card', () => {
  it('should render', () => {
    render(<Card />);
  });
  it('should render Card props', () => {
    let testCardProps: CardProps = {
      title: 'testCard',
      subTitle: 'testCardSubTitle',
      content: 'testCardContent',
      actions: [
        {name: 'action1', callback: () => {}},
        {name: 'action2', callback: () => {}},
      ],
    };
    const {queryAllByText, queryAllByRole} = render(
      <Card {...testCardProps} />,
    );
    expect(queryAllByText('testCard').length).toEqual(1);
    expect(queryAllByText('testCardSubTitle').length).toEqual(1);
    expect(queryAllByText('testCardContent').length).toEqual(1);
    expect(queryAllByRole('button').length).toEqual(2);
  });
  it('should fire action callbacks pressing action buttons', async () => {
    const action1CallbackMock = jest.fn();
    const action2CallbackMock = jest.fn();
    let testCardProps: CardProps = {
      actions: [
        {name: 'action1', callback: action1CallbackMock},
        {name: 'action2', callback: action2CallbackMock},
      ],
    };

    const {getByText, queryAllByRole} = render(<Card {...testCardProps} />);
    expect(queryAllByRole('button').length).toEqual(2);
    const action1Button = getByText('action1');
    const action2Button = getByText('action2');
    await waitFor(() => {
      fireEvent.press(action1Button);
      fireEvent.press(action2Button);
    });
    expect(action1CallbackMock).toHaveBeenCalledTimes(1);
    expect(action2CallbackMock).toHaveBeenCalledTimes(1);
  });
  it.todo("should match style")
});
