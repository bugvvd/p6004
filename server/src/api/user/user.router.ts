import Router from "@koa/router";
import * as UserController from "./user.controller";

const userRouter = new Router({ prefix: "/api/user" });

userRouter.get("/", (ctx) => {
  ctx.body = "Hello User!";
});
userRouter.post("/login", UserController.login);

userRouter.post("/logout", (ctx) => {});

userRouter.post("/register", (ctx) => {});

userRouter.delete("/deregister", (ctx) => {});

userRouter.put("/update", (ctx) => {});

export default userRouter;
