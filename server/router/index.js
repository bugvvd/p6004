const index = require("./gets")
const project = require("./project.router");
const management = require("./management.router");
const user = require("./user.router");
const combineRouters = require("koa-combine-routers");

const router = combineRouters(index, project, management, user);
module.exports = router;
