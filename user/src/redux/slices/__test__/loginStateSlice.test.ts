import loginStateReducer, {login, logout} from '../loginStateSlice';
// types
import {getStoreWithState, RootState} from '../../store';

// api
import * as loginAPI from '../../../api/loginRequest';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

/* test with mock store*/
describe('loginSlice mock', () => {
  // beforeEach(() => {
  //   jest.clearAllMocks();
  // });
  // afterEach(() => {
  //   jest.clearAllMocks();
  // });
  /* selector */
  it.todo('should return state for any prepared selectors');
  /* reducer */
  it('should keep currentState when passed an empty action', () => {
    const testCurrentState = {
      username: 'foo',
      token: 'bar',
      license: 'baz',
      isLoggedIn: true,
    };
    const testAction = {type: ''};
    const testResult = loginStateReducer(testCurrentState, testAction);
    expect(testResult).toEqual({
      username: 'foo',
      token: 'bar',
      license: 'baz',
      isLoggedIn: true,
    });
  });
  it("should return logout State dispatch 'logout' action", () => {
    const testCurrentState = {
      username: 'foo',
      token: 'bar',
      license: 'baz',
      isLoggedIn: true,
    };
    const testAction = logout({
      username: 'foo',
      token: 'bar',
      license: 'baz',
      isLoggedIn: true,
    })
    const testResult = loginStateReducer(testCurrentState, testAction as any);
    expect(testResult).toEqual({
      username: null,
      token: null,
      license: null,
      isLoggedIn: false,
    });
  });
  /* action */
  test('fulfilled login thunk w/ mocked dispatch', async () => {
    // dispatch: refer to createAsyncThunk source code for more detail
    const loginRequestSpy = jest
      .spyOn(loginAPI, 'loginRequest')
      .mockImplementationOnce(() =>
        Promise.resolve({
          username: 'foo',
          token: 'bar',
          license: 'baz',
        }),
      );
    const testDispatch = jest.fn();
    const testCurrentState: RootState = {
      loginState: {username: '', token: '', license: '', isLoggedIn: false},
    };
    const testLoginFormParams = {username: 'foo', password: 'bar'};
    const testThunk = login(testLoginFormParams);
    await testThunk(testDispatch, () => testCurrentState, undefined);
    expect(loginRequestSpy).toHaveBeenCalledTimes(1);
    const {calls} = testDispatch.mock;
    // console.log('calls', calls);
    expect(calls).toHaveLength(2);
    expect(calls[0][0].type).toEqual('loginStateSlice/login/pending');
    expect(calls[1][0].type).toEqual('loginStateSlice/login/fulfilled');
    expect(calls[1][0].payload).toEqual({
      username: 'foo',
      token: 'bar',
      license: 'baz',
    });
    // to remove jest.spyOn function completely in preventing from messing with following test
    loginRequestSpy.mockRestore();
  });
  test('rejected login thunk w/ mocked dispatch', async () => {
    // dispatch: refer to createAsyncThunk source code for more detail
    const loginRequestSpy = jest
      .spyOn(loginAPI, 'loginRequest')
      .mockImplementationOnce(() => Promise.resolve('timeout'));
    const testDispatch = jest.fn();
    const testCurrentState: RootState = {
      loginState: {username: '', token: '', license: '', isLoggedIn: false},
    };
    const testLoginFormParams = {username: 'foo', password: 'bar'};
    const testThunk = login(testLoginFormParams);
    await testThunk(testDispatch, () => testCurrentState, undefined);
    expect(loginRequestSpy).toHaveBeenCalledTimes(1);
    const {calls} = testDispatch.mock;
    // console.log('calls', calls);
    expect(calls).toHaveLength(2);
    expect(calls[0][0].type).toEqual('loginStateSlice/login/pending');
    expect(calls[1][0].type).toEqual('loginStateSlice/login/rejected');
    expect(calls[1][0].payload).toBe('Internal Error: login request timeout');
    // to remove jest.spyOn function completely in preventing from messing with following test
    loginRequestSpy.mockRestore();
  });
  test('fulfilled login thunk w/ mocked store', async () => {
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);
    const testCurrentState: RootState = {
      loginState: {username: '', token: '', license: '', isLoggedIn: false},
    };
    const storeMock = mockStore({testCurrentState});
    const testLoginFormParams = {username: 'foo', password: 'bar'};
    const loginRequestSpy = jest
      .spyOn(loginAPI, 'loginRequest')
      .mockImplementationOnce(() =>
        Promise.resolve({
          username: 'foo',
          token: 'bar',
          license: 'baz',
        }),
      );
    await storeMock.dispatch(login(testLoginFormParams) as any);
    // actionMock: refer to redux-mock-store createStore source code for more detail
    let actionMock = storeMock.getActions();
    // console.log('actionMock', actionMock);
    actionMock = storeMock.getActions();
    expect(actionMock.length).toBe(2);
    expect(actionMock[0].type).toEqual('loginStateSlice/login/pending');
    expect(actionMock[1].type).toEqual('loginStateSlice/login/fulfilled');
    expect(actionMock[1].payload).toEqual({
      username: 'foo',
      token: 'bar',
      license: 'baz',
    });
    loginRequestSpy.mockRestore();
  });
  test('rejecteded login thunk w/ mocked store', async () => {
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);
    const testCurrentState: RootState = {
      loginState: {username: '', token: '', license: '', isLoggedIn: false},
    };
    const storeMock = mockStore({testCurrentState});
    const testLoginFormParams = {username: 'foo', password: 'bar'};
    const loginRequestSpy = jest
      .spyOn(loginAPI, 'loginRequest')
      .mockImplementationOnce(() => Promise.resolve('timeout'));
    await storeMock.dispatch(login(testLoginFormParams) as any);
    // actionMock: refer to redux-mock-store createStore source code for more detail
    let actionMock = storeMock.getActions();
    // console.log('actionMock', actionMock);
    actionMock = storeMock.getActions();
    expect(actionMock.length).toBe(2);
    expect(actionMock[0].type).toEqual('loginStateSlice/login/pending');
    expect(actionMock[1].type).toEqual('loginStateSlice/login/rejected');
    expect(actionMock[1].payload).toEqual(
      'Internal Error: login request timeout',
    );
    loginRequestSpy.mockRestore();
  });
  test('rejected login thunk w/ real redux store', async () => {
    const preloadedState: RootState = {
      loginState: {
        username: 'any',
        token: 'other',
        license: 'stuff',
        isLoggedIn: true,
      },
    };
    const storeWithState = getStoreWithState(preloadedState);
    const testLoginFormParams = {username: 'foo', password: 'bar'};
    const loginRequestSpy = jest
      .spyOn(loginAPI, 'loginRequest')
      .mockImplementationOnce(() => Promise.resolve('timeout'));
    await storeWithState.dispatch(login(testLoginFormParams) as any);
    expect(storeWithState.getState().loginState).toEqual({
      username: null,
      token: null,
      license: null,
      isLoggedIn: false,
    });
    loginRequestSpy.mockRestore();
  });
  test('fulfilled login thunk w/ real redux store', async () => {
    const preloadedState: RootState = {
      loginState: {
        username: 'anyyyy',
        token: 'ooother',
        license: 'stufffff',
        isLoggedIn: false,
      },
    };
    const storeWithState = getStoreWithState(preloadedState);
    const testLoginFormParams = {username: 'foo', password: 'bar'};
    const loginRequestSpy = jest
      .spyOn(loginAPI, 'loginRequest')
      .mockImplementationOnce(() =>
        Promise.resolve({
          username: 'foo',
          token: 'bar',
          license: 'baz',
        }),
      );
    await storeWithState.dispatch(login(testLoginFormParams) as any);
    expect(storeWithState.getState().loginState).toEqual({
      username: 'foo',
      token: 'bar',
      license: 'baz',
      isLoggedIn: true,
    });
    loginRequestSpy.mockRestore();
  });
});
