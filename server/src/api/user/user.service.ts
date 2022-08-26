import * as UserModel from "./user.model";
import {
  RegisterPayload,
  RegisterServiceResult,
  DeregisterPayload,
  DeregisterServiceResult,
  LoginPayload,
  LoginServiceResult,
  GetServiceResult
} from "./types";

const register = async (
  payload: RegisterPayload
): Promise<RegisterServiceResult> => {
  const { username, password } = payload;
  try {
    return { username: "userFound", token: "userToken" };
  } catch (error) {
    throw error;
  }
};

const deRegister = async (
  payload: DeregisterPayload
): Promise<DeregisterServiceResult> => {
  const { username, password } = payload;
  try {
    return { isSuccessful: true };
  } catch (error) {
    throw error;
  }
};

const login = async (payload: LoginPayload): Promise<LoginServiceResult> => {
  const { username, password } = payload;
  try {
    // UserModel.find()
    return { username: "userFound", token: "userToken" };
  } catch (error) {
    throw error;
  }
};

const get = async (username: string): Promise<GetServiceResult> => {
  try {
    // UserModel.find()
    return { username: "userFound", token: "userToken" };
  } catch (error) {
    throw error;
  }
};

const update = async () => {};

export { register, deRegister, login, get, update };
