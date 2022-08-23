import Router from "@koa/router";

const projectRouter= new Router({ prefix: "/api/project" });

projectRouter.get("/", (ctx) => {
  ctx.body = "Hello Project!";
});

export default projectRouter;
