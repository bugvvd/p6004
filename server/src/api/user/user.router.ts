import Router from "@koa/router";
import * as UserController from "./user.controller";
import * as UserGuard from "./user.guard";

const userRouter = new Router({ prefix: "/api/user" });

userRouter.get("/", (ctx) => {
  ctx.body = "Hello User!";
});
userRouter
  .post("/register", UserGuard.validateBody, UserController.register)
  .delete("/deregister", UserGuard.validateBody, UserController.deRegister)
  .post("/login", UserGuard.validateBody, UserController.login)
  .get("/get", UserGuard.validateToken, UserController.get)
  .put("/update", UserGuard.validateToken, UserController.update);

export default userRouter;
