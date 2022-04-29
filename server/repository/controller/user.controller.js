const user = require("../service/user.service");

module.exports = {
  async register(ctx, next) {
    const data = ctx.request.body;
    const res = await user.register(data);
    ctx.body = res;
  },
  async deregister(ctx, next) {
    const data = ctx.request.body;
    const res = await user.deregister(data);
    ctx.body = res;
  },
  async login(ctx, next) {
    const data = ctx.request.body;
    const requestTokenPayload = ctx.request.body.requestTokenPayload;
    const res = await user.login({...data, requestTokenPayload});
    ctx.body = res;
  },
  async logout() {},
  async update(ctx, next) {
    const data = ctx.request.body;
    const res = await user.update(data);
    ctx.body = res;
  },
};
