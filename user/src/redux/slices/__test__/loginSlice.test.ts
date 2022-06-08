import loginReducer, {login, logout} from '../loginSlice';
import {RootState} from '../../store';

/* test with mock store*/
describe('loginSlice mock', () => {
  /* reducer */
  it('should return initialState when passed an empty action', () => {
    const testInitialState = undefined;
    const testAction = {type: ''};
    const testResult = loginReducer(testInitialState, testAction);
    expect(testResult).toEqual({
      username: null,
      token: null,
      license: null,
      isLoggedIn: false,
    });
  });
  it("should return all null for loginState and 'isLoggedIn: false' false when action 'logout' is called", () => {
    const testInitialState = undefined;
    const testAction = logout();
    const testResult = loginReducer(testInitialState, testAction);
    expect(testResult).toEqual({
      username: null,
      token: null,
      license: null,
      isLoggedIn: false,
    });
  });
  /* action */
  /* login, async thunk */
  it("login w/mocked dispatch", async () => {
    const testDispatch = jest.fn();
    const testState: RootState = {
      login: {username: '', token: '', license: '', isLoggedIn: false},
    };
    const testLoginFormValue = {username: 'admin', password: '12345'};
    const testThunk = login(testLoginFormValue);
    await testThunk(testDispatch, () => testState, undefined);
    const {calls} = testDispatch.mock;
    expect(calls).toHaveLength(2);
    expect(calls[0][0].type).toEqual("loginSlice/login/pending");
    expect(calls[1][0].type).toEqual("loginSlice/login/fulfilled");
    // Field value varies by loginPayload
    expect(Object.keys(calls[1][0].payload)).toEqual([
      'username',
      'token',
      'license',
    ]);
  });
  it.todo("login w/mocked store ")
  /* logout, sync action */
  
  /* exception handling */
  it.todo("loginSlice/login thunk time out handling")
});

/* test with app store */
