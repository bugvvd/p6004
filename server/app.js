const Koa = require("koa");
const app = new Koa();

const logger = require("koa-logger");
app.use(logger());

const bodyParser = require("koa-bodyparser");
app.use(bodyParser());

const router = require("./router");
app.use(router());

// const postRouter = require("./router/router.posts.js");
// const getRouter = require("./router/gets.js");
// app.use(getRouter.routes());
// app.use(postRouter.routes());

/**
 * Load model onto app: initialize Mongoose ORM and attach models in app.$model
 */
// const { loadeModel } = require("./model/loader/loadModel");
// loadeModel(app);

// console.log(app.io);

/**
 * Centralized error handling
 */
// process.on("unhandledRejection", (reason) => {
//   throw new AppError(reason, 500);
// });

// process.on('uncaughtException', (error) => {
//   throw new AppError("Error", 500)
// });

app.on("error", (err, ctx) => {
  // centralized error handling:
  console.error("app error", err, ctx);
  // write error to log file
});

module.exports = app;
