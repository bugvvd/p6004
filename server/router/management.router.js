const Router = require("koa-router");
const router = new Router({ prefix: "/api/management" });

const management = require("../repository/controller/management.controller");

/**
 * Use Authorization Middleware
 */
const auth = require("../repository/middleware/authentication.js");

// post query method, conditions attached in ctx.request.body
router.post("/register", management.rootRegister);
router.delete("/deregister", management.rootDeregister);
router.post("/login", management.rootLogin);
router.get("/logout", management.rootLogout);
router.put("/update/:op", management.rootUpdate);

router.post(
  "/team/register",
  auth.profileAuthentication,
  management.teamRegister
);
router.post("/team/login", auth.profileAuthentication, management.teamLogin);
router.get("/team/logout", management.teamLogout);
router.put("/team/update", management.teamUpdate);

module.exports = router;
