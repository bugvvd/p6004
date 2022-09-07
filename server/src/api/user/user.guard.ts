import type Koa from "koa";
import Joi from "joi";

const schema = Joi.object({
  username: Joi.string().min(6).max(20).required(),
  password: Joi.string().min(6).max(20).required(),
});

const validateBody = async (ctx: Koa.Context, next: Function) => {
  const { error } = schema.validate(ctx.request.body);
  if (error) {
    ctx.response.status = 422;
    ctx.response.body = error.message;
    return;
  } else {
    try {
      await next();
    } catch (error) {
      throw error;
    }
  }
};

const validateToken = async (ctx: Koa.Context, next: Function) => {
  let error;
  let token = ctx.get("Authorization").replace("Bearer ", "");
  // attach username acquired from token to ctx.user
  if (error) {
    ctx.response.status = 401;
    ctx.response.body = "";
    return;
  } else {
    try {
      await next();
    } catch (error) {
      throw error;
    }
  }
};

export { validateToken, validateBody };
