import type Koa from "koa";
import * as UserService from "./user.service";

import type {
  UserCredential,
  RegisterServiceResult,
  DeregisterServiceResult,
  LoginServiceResult,
  GetServiceResult,
} from "./types";

const register = async (ctx: Koa.Context, next: Function) => {
  const registerPayload: UserCredential = ctx.request.body;
  try {
    const res: RegisterServiceResult = await UserService.register(
      registerPayload
    );
    await next();
    ctx.response.body = res;
  } catch (error) {
    throw error;
  }
};

const deRegister = async (ctx: Koa.Context, next: Function) => {
  const deRegisterPayload: UserCredential = ctx.request.body;
  try {
    const res: DeregisterServiceResult = await UserService.deRegister(
      deRegisterPayload
    );
    await next();
    ctx.response.body = res;
  } catch (error) {
    throw error;
  }
};

const login = async (ctx: Koa.Context, next: Function) => {
  const loginPayload: UserCredential = ctx.request.body;
  try {
    const res: LoginServiceResult = await UserService.login(loginPayload);
    await next();
    ctx.response.body = res;
  } catch (error) {
    throw error;
  }
};

const get = async (ctx: Koa.Context, next: Function) => {
  const user: string = ctx.user;
  try {
    const res: GetServiceResult = await UserService.get(user);
    await next();
    ctx.response.body = res;
  } catch (error) {
    throw error;
  }
};

const update = async () => {};

export { register, deRegister, login, get, update };
