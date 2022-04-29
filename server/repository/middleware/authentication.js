const jwt = require("jsonwebtoken");

/**
 * universal app secret
 */
const APP_SECRET = "appScret";

// update token if expiration is detected to be less than 24 hours threshold
const EXPIRATION_COUNTDOWN = 24;
// prolong token expiration for 24 * 7 hours
const PROLONGATION_PERIOD = 24 * 7;

const response = require("../response.json");

const assignToken = (payload) => {
  const now = new Date().getTime();
  payload = {
    ...payload,
    iat: now,
    exp: now + 3600 * 1000 * PROLONGATION_PERIOD,
  };
  return jwt.sign(payload, APP_SECRET);
};

const verifyToken = (token) => {
  return jwt.verify(token, APP_SECRET);
};

const decodeToken = (token) => {
  return jwt.decode(token, APP_SECRET);
};

module.exports = {
  async appAuthentication(ctx, next) {
    // validate app token
    await next();
  },

  /**
   * Verfity the token of incoming request and pass on user info to following middlewares
   * @param {*} ctx
   * @param {*} next
   */
  async profileAuthentication(ctx, next) {
    let token = ctx.get("Authorization").replace("Bearer ", ""),
      requestTokenPayload,
      responseTokenPayload;
    if (!token) {
      // non-token request
      await next();
      if (ctx.body.code === 0) {
        // request succeeded -> wrap all details to assign new userToken
        responseTokenPayload = { ...ctx.body.detail };
        ctx.body.token = assignToken(responseTokenPayload, APP_SECRET);
        return;
      } else {
        // request failed ->
        ctx.body.token = null;
        return;
      }
    } else {
      // token request
      try {
        requestTokenPayload = verifyToken(token, APP_SECRET);
        if (!requestTokenPayload) {
          ctx.body = { ...response.generic.invalid_token, token: null };
          return;
        } else {
          // if token expired
          if (token.exp < new Date().getTime()) {
            console.log("token expired");
            ctx.body = { ...response.generic.invalid_token, token: null };
            return;
          }
          // token is not expired
          ctx.request.body.requestTokenPayload = requestTokenPayload; // save payload for inner middlewares
          await next();
          // request validated, renew token
          responseTokenPayload = { ...ctx.body.detail };
          if (ctx.body.code === 0) {
            ctx.body.token = assignToken(responseTokenPayload, APP_SECRET);
            return;
          } else {
            // request is not valid
            ctx.body.token = null;
            return;
          }
        }
      } catch (error) {
        // team userToken is not valid
        console.log("Error at token authentication: \n", error);
        ctx.status = error.statusCode || error.status || 500;
        ctx.body = response.generic.internal_error;
        return;
      }
    }
  },
};
