import {configureStore} from '@reduxjs/toolkit';
import loginReducer from './slices/loginSlice';

export const reducer = {
  login: loginReducer,
};

/* nomal store */
export const store = configureStore({
  reducer: reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

/* dynamically configure store with preloadedState for testing purpose */
export const getStoreWithState = (preloadedState: RootState) => {
  return configureStore({reducer, preloadedState});
};
