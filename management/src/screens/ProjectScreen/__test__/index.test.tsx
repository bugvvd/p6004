import React from 'react';
import {act, render, fireEvent, waitFor} from '@testing-library/react-native';

// screen
import ProjectScreen from '..';

// utils
import {renderWithContext} from '../../../../jest/utils/renderWithContext';
import {getStoreWithState} from '../../../redux/store';
import {Provider} from 'react-redux';

describe('ProjectScreen', () => {
  beforeEach(() => {
    // jest.useFakeTimers();
  });
  afterEach(() => {
    // jest.useRealTimers();
  });
  /* render */
  it('should render ', () => {
    let props: any;
    renderWithContext(<ProjectScreen {...props} />);
  });
  it('should render card contents', () => {
    let props: any;
    const {getByTestId, getByText} = renderWithContext(
      <ProjectScreen {...props} />,
    );

    expect(getByTestId('l_1')).toBeTruthy();
    expect(getByTestId('l_2')).toBeTruthy();
    expect(getByTestId('l_3')).toBeTruthy();
  });
  it('should fire navigation.navigate on pressing card', async () => {
    // proceed with getStoreWithState
    let navigateMock = jest.fn();
    let props: any;
    const {getByTestId} = renderWithContext(
      <ProjectScreen {...props} navigation={{navigate: navigateMock}} />,
    );
    const l1Card = getByTestId('l_1');
    const l1CardNavigationParam = {};
    await waitFor(() => fireEvent.press(l1Card));
    expect(navigateMock).toHaveBeenCalledTimes(1);
    expect(navigateMock.mock.calls[0][0]).toBe('ProjectDetail');
    expect(navigateMock.mock.calls[0][1]).toStrictEqual({projectID: 'MHY'});
  });
});
