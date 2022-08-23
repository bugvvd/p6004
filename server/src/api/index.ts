import Router from "@koa/router";
import combineRouters from "koa-combine-routers";
import managementRouter from "./management/management.router";
import projectRouter from "./project/project.router";
import userRouter from "./user/user.router";

const index = new Router().get("/", (ctx) => {
  ctx.body = "Hello P6004!";
});
const router = combineRouters(
  index,
  managementRouter,
  userRouter,
  projectRouter
);

export default router;
