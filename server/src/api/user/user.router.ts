import Router from "@koa/router";

const userRouter= new Router({ prefix: "/api/user" });

userRouter.get("/", (ctx) => {
  ctx.body = "Hello User!";
});

export default userRouter;
