import Router from "@koa/router";
import * as UserController from "./user.controller";
import { userGuard } from "./user.guard";

const userRouter = new Router({ prefix: "/api/user" });

userRouter.get("/", (ctx) => {
  ctx.body = "Hello User!";
});
userRouter
  .post("/register", UserController.register)
  .delete("/deregister", UserController.deRegister)
  .post("/login", UserController.login)
  .get("/get", userGuard, UserController.get)
  .put("/update", userGuard, UserController.update);

export default userRouter;
