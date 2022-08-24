import Koa from "koa";
const app: Koa = new Koa();

// logger
import logger from "koa-logger";
if (process.env.NODE_ENV !== "test") {
  app.use(logger());
}
// router
import router from "./src/api";
app.use(router());

// exception handling
app.on("error", (err) => {
  console.error("server error", err);
});

export default app;
