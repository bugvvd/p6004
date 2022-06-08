import {configureStore} from '@reduxjs/toolkit';
import loginStateReducer from './slices/loginSlice';

export const reducer = {
  loginState: loginStateReducer,
};

/* nomal store */
export const store = configureStore({
  reducer,
});

/* dynamically configure store with preloadedState for testing purpose */
// refer to configureStore.ts source code for more
export const getStoreWithState = (preloadedState?: RootState) => {
  return configureStore({reducer, preloadedState});
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
