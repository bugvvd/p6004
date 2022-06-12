import {createSlice, Slice, PayloadAction} from '@reduxjs/toolkit';

interface AppState {
  isLoading: boolean;
}

const initialState: AppState = {
  isLoading: true,
};

export const appSlice: Slice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
});

export default appSlice.reducer;
