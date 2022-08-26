import type Koa from "koa";

const userGuard = async (ctx: Koa.Context, next: Function) => {
  let token = ctx.get("Authorization").replace("Bearer ", "");
  // attach username acquired from token to ctx.user
  await next();
};

export { userGuard };
