import Koa from "koa";
import Router from "@koa/router";
import logger from "koa-logger";

const app: Koa = new Koa();
app.use(logger());

const router: Router = new Router();

router.get("/", (ctx) => {
  ctx.body = "Hello P6004!";
});

app.use(router.routes()).use(router.allowedMethods());

app.on("error", (err) => {
  console.error("server error", err);
});

export default app;
