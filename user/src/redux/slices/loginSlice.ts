import {
  createSlice,
  Slice,
  PayloadAction,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import type {RootState, AppDispatch} from '../store';

interface LoginStateProps {
  username: string | null;
  token: string | null;
  license: string | null;
  isLoggedIn: boolean;
}

interface LoginFormValueProps {
  username: string;
  password: string;
}

interface LoginPayloadProps {
  username: string | null;
  token: string | null;
  license: string | null;
}

const initialState: LoginStateProps = {
  username: null,
  token: null,
  license: null,
  isLoggedIn: false,
};

/* slice */
export const loginSlice = createSlice({
  name: 'loginSlice',
  initialState,
  reducers: {
    logout: (state: LoginStateProps) => {
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
    builder.addCase(login.pending, (state: LoginStateProps, action: any) => {
      return state;
    });
    // TODO: type check for action
    builder.addCase(login.fulfilled, (state: LoginStateProps, action: any) => {
      return {
        ...state,
        username: action.payload.username,
        token: action.payload.token,
        license: action.payload.license,
        isLoggedIn: true,
      };
    });
    builder.addCase(login.rejected, (state: LoginStateProps) => {
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
export default loginSlice.reducer;
/* sync action */
export const {logout} = loginSlice.actions;
/* async action */
const demoLoginPayload: LoginPayloadProps = {
  username: 'admin',
  token: 'token123',
  license: 'license123',
};
export const login = createAsyncThunk(
  'loginSlice/login',
  async (props: LoginFormValueProps, thunkAPI) => {
    // TODO: API request
    await new Promise(res => {
      res('done');
    });
    return demoLoginPayload;
  },
);
