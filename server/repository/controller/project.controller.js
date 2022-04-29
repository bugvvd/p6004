const project = require("../service/project.service");

module.exports = {
  async register(ctx, next) {
    const data = ctx.request.body;
    const res = await project.register(data);
    ctx.body = res;
  },
  async deregister(ctx, next) {
    const data = ctx.request.body;
    const res = await project.deregister(data);
    ctx.body = res;
  },
  async update(ctx, next) {
    const data = ctx.request.body;
    const res = await project.update(data);
    const io = require("../../socketIO/index").getIO();
    io.emit("update", "project info update");
    ctx.body = res;
  },
  async get(ctx, next) {
    const requestTokenPayload = ctx.request.body.requestTokenPayload;
    const res = await project.get(requestTokenPayload);
    ctx.body = res;
  },
};
