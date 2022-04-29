const { models } = require("../model");
const user = models["user"];
const response = require("../response.json");
const profile = { user: "USER", committee: "COMMITTEE" };

module.exports = {
  async register(data) {
    let filter, doc, newDoc;
    const { username, password } = data;
    filter = { username: username };

    /**
     * validation
     */
    doc = await user.findOne(filter);
    if (doc) {
      return response.user.register.username_is_already_registered;
    }

    /**
     * registration
     */
    let { units } = data;
    units = Object.values(JSON.parse(units));
    // units = JSON.parse(units).map((val, index) => {

    // })

    let newUser = {
      username,
      password,
      cellphone: username,
      units: units,
    };

    doc = await user.create(newUser);
    if (!doc) {
      return {
        ...response.generic.internal_error,
        detial: {},
      };
    }
    return {
      ...response.generic.success,
      detail: { username: username, units: doc.units, profile: profile.user },
    };
  },
  async deregister(data) {
    let res = await user.findOne(data);
    if (res) {
      res = await user.deleteOne(data);
      return response.generic.success;
    } else {
      return response.user.can_not_delete_user;
    }
  },
  async login(params) {
    let filter, doc;
    const { username, password, requestTokenPayload } = params;
    /**
     * Token-DB validation procedure, early return with response if there exists any error
     * senario: check whether user is removed from DB
     */
    if (requestTokenPayload) {
      filter = {
        username: requestTokenPayload.username,
      };
      doc = await user.findOne(filter);
      if (doc) {
        return {
          ...response.generic.success,
          detail: {
            username: requestTokenPayload.username,
            units: doc.units,
            profile: profile.user,
          },
        };
      } else {
        return {
          ...response.user.login.invalid_credentials,
          detail: {},
        };
      }
    }

    /**
     * Non-token query procedure, early return with response if there exists any error
     */
    filter = {
      username: username,
      password: password,
    };
    update = {
      // $set: { ["team.$.last_login_time"]: new Date().getTime() },
    };
    doc = await user.findOneAndUpdate(filter, update, { new: true });
    if (doc) {
      return {
        ...response.generic.success,
        detail: { username: username, units: doc.units, profile: profile.user },
      };
    } else {
      return {
        ...response.user.login.invalid_credentials,
        detail: {},
      };
    }
  },
  async logout(data) {},
  async update(data) {
    const { filter, update } = data;
    let res = await user.findOneAndUpdate(filter, update);
    if (res) {
      return response.generic.success;
    } else {
      return {
        code: -100,
        message: `Update failed`,
        data: null,
      };
    }
  },
};
