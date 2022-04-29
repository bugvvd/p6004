const management = require("../service/management.service");

module.exports = {
  async rootRegister(ctx, next) {
    const data = ctx.request.body;
    const res = await management.rootRegister(data);
    ctx.body = res;
  },
  async rootDeregister(ctx, next) {
    const data = ctx.request.body;
    const res = await management.rootDeregister(data);
    ctx.body = res;
  },
  async rootLogin(ctx, next) {
    const data = ctx.request.body;
    const res = await management.rootLogin(data);
    ctx.body = res;
  },
  async rootLogout() {
    const data = ctx.request.body;
    const res = await management.rootLogout(data);
    ctx.body = res;
  },
  async rootUpdate(ctx, next) {
    const data = ctx.request.body;
    const op = ctx.params.op;
    const res = await management.update(data);
    ctx.body = res;
  },

  async teamRegister(ctx, next) {
    const data = ctx.request.body;
    const res = await management.teamRegister(data);
    ctx.body = res;
  },
  async teamLogin(ctx, next) {
    const data = ctx.request.body;
    const requestTokenPayload = ctx.request.body.requestTokenPayload;
    const res = await management.teamLogin({...data, requestTokenPayload});
    ctx.body = res;
  },
  async teamLogout(ctx, next) {
    const data = ctx.request.body;
    const res = await management.teamLogout(data);
    ctx.body = res;
  },
  async teamUpdate(ctx, next) {
    const data = ctx.request.body;
    const res = await management.teamUpdate(data);
    ctx.body = res;
  },
};
