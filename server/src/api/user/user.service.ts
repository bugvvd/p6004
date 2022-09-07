import {
  UserCredential,
  RegisterServiceResult,
  DeregisterServiceResult,
  LoginServiceResult,
  GetServiceResult,
} from "./types";

import { encryptPassword, verifyPassword } from "../../../utils/encrypt";
import * as UserModel from "./user.model";
import * as response from "./user.response.json";
import { signToken } from "../../../utils/jwt";

const register = async (
  payload: UserCredential
): Promise<RegisterServiceResult> => {
  const { username, password } = payload;
  const result = await UserModel.insertOne(
    username,
    await encryptPassword(password)
  )
    .then((res) => {
      let data = { ...res, token: signToken(username, "user") };
      return { ...response.register.success, data };
    })
    .catch((err) => {
      if (err.message === `${username} already exists`) {
        return { ...response.register.failure.duplicated_username, data: null };
      } else {
        throw err;
      }
    });

  return result;
};

const deRegister = async (
  payload: UserCredential
): Promise<DeregisterServiceResult> => {
  const { username, password } = payload;
  await verifyPassword(password, "");

  try {
    return {
      ...response.deRegister.failure.username_not_found,
      data: { isSuccessful: false },
    };
  } catch (error) {
    throw error;
  }
};

const login = async (payload: UserCredential): Promise<LoginServiceResult> => {
  const { username, password } = payload;
  await verifyPassword(password, "");
  try {
    // UserModel.find()
    return { ...response.login.failure.username_not_found, data: null };
  } catch (error) {
    throw error;
  }
};

const get = async (username: string): Promise<GetServiceResult> => {
  try {
    // UserModel.find()
    return response.get.failure.some_error;
  } catch (error) {
    throw error;
  }
};

const update = async () => {};

export { register, deRegister, login, get, update };
