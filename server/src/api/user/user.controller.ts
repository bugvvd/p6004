import type Koa from "koa";
import * as UserService from "./user.service";

const login = async (ctx: Koa.Context, next: Function) => {
  UserService.login();
  await next();
};

const logout = async () => {};

const register = async () => {};

const deregister = async () => {};

export { login, logout, register, deregister };
