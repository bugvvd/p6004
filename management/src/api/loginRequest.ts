import {LoginFormParms} from '../redux/slices/loginSlice';
import {sleep} from '../utils/sleep';
export const LOGIN_REQUEST_TIMEOUT = 2000;

const requestTimeout = async () => {
  await sleep(LOGIN_REQUEST_TIMEOUT);
  return Promise.resolve('timeout');
};

const demoLoginPayload = {
  username: 'admin',
  token: 'token123',
  license: 'license123',
};

export const fetchData = async (props: LoginFormParms) => {
  // make request
  await sleep(LOGIN_REQUEST_TIMEOUT / 2);
  let response = new Promise((resolve, reject) => {
    if (true) {
      resolve(demoLoginPayload);
    } else {
      reject('server error');
    }
  });
  return await response.then(result => result).catch(error => error);
};

export const loginRequest = async (props: LoginFormParms) => {
  return await Promise.race([requestTimeout(), fetchData(props)])
    .then(result => {
      return result;
    })
    .catch(error => {
      throw error;
    });
};
