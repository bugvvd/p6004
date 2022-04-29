const Router = require("koa-router");
const router = new Router({ prefix: "/api/user" });

const user = require("../repository/controller/user.controller");

/**
 * Use Authorization Middleware
 */
const auth = require("../repository/middleware/authentication.js");

// post query method, conditions attached in ctx.request.body
router.post("/register", auth.profileAuthentication, user.register);
router.delete("/deregister", user.deregister);
router.post("/login", auth.profileAuthentication, user.login);
router.get("/logout", user.logout);
router.put("/update", user.update);

module.exports = router;
