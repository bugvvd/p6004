const Router = require("koa-router");
const router = new Router({ prefix: "/api/project" });

const project = require("../repository/controller/project.controller");
const authentication = require("../repository/middleware/authentication.js");

/**
 * Use Authorization Middleware
 */
const auth = require("../repository/middleware/authentication.js");

// post query method, conditions attached in ctx.request.body
router.post("/register", project.register);
router.delete("/deregister", project.deregister);
router.put("/update", project.update);
router.get("/get", authentication.profileAuthentication, project.get);
router.get("/list", authentication.profileAuthentication, project.get);

module.exports = router;
