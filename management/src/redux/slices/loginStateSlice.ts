import {
  createSlice,
  createAsyncThunk,
  createSelector,
  PayloadAction,
  createAction,
} from '@reduxjs/toolkit';

import {loginRequest} from '../../api/loginRequest';
import {logoutRequest} from '../../api/logoutRequest';

export interface LoginStateParams {
  username: string | null;
  token: string | null;
  license: string | null;
  isLoggedIn: boolean;
}

export interface LoginFormParms {
  username: string;
  password: string;
}

interface LoginPayloadParams {
  username: string | null;
  token: string | null;
  license: string | null;
}

const initialLoginState: LoginStateParams = {
  username: null,
  token: null,
  license: null,
  isLoggedIn: false,
};

/* slice */
export const loginStateSlice = createSlice({
  name: 'loginStateSlice',
  initialState: initialLoginState,
  reducers: {
    logout: (state: LoginStateParams) => {
      return {
        ...state,
        username: null,
        token: null,
        license: null,
        isLoggedIn: false,
      };
    },
  },
  extraReducers: builder => {
    builder.addCase(login.pending, (state: LoginStateParams) => {
      return state;
    });
    // type infer error
    // No overload matches this call.
    // Overload 1 of 2, '(actionCreator: AsyncThunkFulfilledActionCreator<unknown, LoginFormParms, {}>, reducer: CaseReducer<LoginStateParams, PayloadAction<...>>): ActionReducerMapBuilder<...>', gave the following error.
    //   Argument of type '(state: LoginStateParams, action: PayloadAction<LoginPayloadParams>) => { username: string | null; token: string | null; license: string | null; isLoggedIn: true; }' is not assignable to parameter of type 'CaseReducer<LoginStateParams, PayloadAction<unknown, string, { arg: LoginFormParms; requestId: string; requestStatus: "fulfilled"; }, never>>'.
    //     Types of parameters 'action' and 'action' are incompatible.
    //       Type 'PayloadAction<unknown, string, { arg: LoginFormParms; requestId: string; requestStatus: "fulfilled"; }, never>' is not assignable to type '{ payload: LoginPayloadParams; type: string; }'.
    //         Types of property 'payload' are incompatible.
    //           Type 'unknown' is not assignable to type 'LoginPayloadParams'.
    // Overload 2 of 2, '(type: string, reducer: CaseReducer<LoginStateParams, { payload: LoginPayloadParams; type: string; }>): ActionReducerMapBuilder<LoginStateParams>', gave the following error.
    //   Argument of type 'AsyncThunkFulfilledActionCreator<unknown, LoginFormParms, {}>' is not assignable to parameter of type 'string'.

    // this PayloadAction<> type is regulated by the return value of the callback in createAsyncThunk
    // check createAsyncThunk source code for more
    builder.addCase(
      login.fulfilled,
      (state: LoginStateParams, action: PayloadAction<LoginPayloadParams>) => {
        return {
          ...state,
          username: action.payload.username,
          token: action.payload.token,
          license: action.payload.license,
          isLoggedIn: true,
        };
      },
    );
    builder.addCase(login.rejected, (state: LoginStateParams) => {
      return {
        ...state,
        username: null,
        token: null,
        license: null,
        isLoggedIn: false,
      };
    });
  },
});

/* reducer */
export default loginStateSlice.reducer;
/* async logout */
export const logout = createAction(
  'loginStateSlice/logout',
  (props: LoginStateParams) => {
    // fire and forget
    logoutRequest(props);
    return {payload: null};
  },
);
/* async action */
export const login = createAsyncThunk(
  'loginStateSlice/login',
  async (props: LoginFormParms, thunkAPI) => {
    let loginResponse = await loginRequest(props);
    if (loginResponse === 'timeout') {
      // dispatch errormessage
      // thunkAPI.dispatch(errorMessageAction)
      return thunkAPI.rejectWithValue('Internal Error: login request timeout');
    } else if (loginResponse === 'error') {
      // dispatch errormessage
      // thunkAPI.dispatch(errorMessageAction)
      return thunkAPI.rejectWithValue('Internal Error: server error');
    } else {
      return loginResponse as LoginPayloadParams;
    }
  },
);

/* prepared selector */
export const getLoginState = createSelector(
  (state: LoginStateParams) => state.isLoggedIn,
  state => {
    return state;
  },
);
