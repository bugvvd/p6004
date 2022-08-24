import type Koa from "koa";
import * as UserService from "./user.service";

import type { LoginResponse } from "./types";

const login = async (ctx: Koa.Context, next: Function) => {
  const loginPayload = ctx.request.body;
  try {
    const res: LoginResponse = await UserService.login(loginPayload);
    await next();
    ctx.response.body = res;
  } catch (error) {
    throw error;
  }
};

const logout = async () => {};

const register = async () => {};

const deregister = async () => {};

export { login, logout, register, deregister };
