import Router from "@koa/router";

const managementRouter = new Router({ prefix: "/api/management" });

managementRouter.get("/", (ctx) => {
  ctx.body = "Hello Management!";
});

export default managementRouter;
