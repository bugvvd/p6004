import * as UserModel from "./user.model";
import { LoginPayload, LoginResponse } from "./types";

const login = async (payload: LoginPayload): Promise<LoginResponse> => {
  try {
    // UserModel.find()
    return { token: "token123" };
  } catch (error) {
    throw error;
  }
};

const logout = async () => {};

const register = async () => {};

const deregister = async () => {};

export { login, logout, register, deregister };
