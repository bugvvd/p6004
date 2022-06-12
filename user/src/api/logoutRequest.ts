import {LoginStateParams} from '../redux/slices/loginStateSlice';

export const logoutRequest = async (props: LoginStateParams) => {
  // post logout request
  return Promise.resolve(true);
};
