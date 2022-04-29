const { models } = require("../model");
const management = models["management"];
const response = require("../response.json");

const profile = { admin: "ADMIN", team: "TEAM" };

module.exports = {
  async rootRegister(params) {
    let doc = await management.findOne(params[0]);
    if (!doc) {
      doc = await management.create(params);
      return response.generic.success;
    } else {
      return response.management.username_already_exist;
    }
  },
  async rootDeregister(params) {
    let doc = await management.findOne(params);
    if (doc) {
      doc = await management.deleteOne(params);
      return response.generic.success;
    } else {
      return response.management.can_not_delete_management;
    }
  },
  async rootLogin(params) {},
  async rootLogout(params) {},
  async rootupdate(params) {
    const { filter, update } = params;
    const op = Object.keys(update)[0];
    // console.log(op);

    // CRUD all fields in the management collection

    // CRUD super user

    // CRUD team member
    // update example: JSON
    //   {
    //     "filter": {
    //         "id": "QTMD996"
    //     },
    //     "update": {
    //         "$push": {
    //             "team": "QTMD996-4"
    //         }
    //     }
    // }
    let doc = await management.findOneAndUpdate(filter, update);
    console.log(management.schema.tree);

    if (doc) {
      return response.generic.success;
    } else {
      return {
        code: -100,
        message: `Update failed`,
        params: null,
      };
    }
  },

  async teamLogin(params) {
    // console.log("team login params", params);
    let filter, doc;
    const { username, password, license, requestTokenPayload } = params;

    /**
     * Token-DB validation procedure, early return with response if there exists any error
     * senario: check whether user is removed from team
     */
    if (requestTokenPayload) {
      if (requestTokenPayload.profile !== "TEAM") {
        return { ...response.generic.invalid_profile };
      }

      filter = {
        license: requestTokenPayload.license,
        "team.username": requestTokenPayload.username,
      };
      doc = await management.findOne(filter);
      if (doc) {
        return {
          ...response.generic.success,
          detail: {
            username: requestTokenPayload.username,
            license: requestTokenPayload.license,
            profile: profile.team,
          },
        };
      } else {
        return {
          ...response.management.team.login.invalid_team_credentials,
          detail: {},
        };
      }
    }

    /**
     * Non-token query procedure, early return with response if there exists any error
     */

    filter = {
      license: license,
      "team.username": username,
      "team.password": password,
    };

    update = {
      $set: { ["team.$.last_login_time"]: new Date().getTime() },
    };
    doc = await management.findOneAndUpdate(filter, update, { new: true });
    // doc = await management.findOne(filter);
    if (doc) {
      return {
        ...response.generic.success,
        detail: { username: username, license: license, profile: profile.team },
      };
    } else {
      return {
        ...response.management.team.login.invalid_team_credentials,
        detail: {},
      };
    }
  },

  async teamLogout(params) {},

  async teamRegister(params) {
    /**
     * team is pre-determined by super-user of the management
     */
    let errorResponse, doc;
    const { username, password, license } = params;
    /**
     * validation procedure, early return with response if there exists any error
     */
    errorResponse = await management
      .findOne({ license: license })
      // App token validation
      .then((doc) => {
        if (!doc) {
          return response.management.team.invalid_license;
        } else {
          // username validation
          const arr = doc.team.filter((item) => item.username === username);
          if (arr.length) {
            // password validation
            return arr[0].password === ""
              ? null
              : response.management.team.register
                  .team_username_is_already_registered;
          } else {
            return response.management.team.register.invalid_team_username;
          }
        }
      });
    if (errorResponse) {
      return errorResponse;
    }

    /**
     * register procedure
     */
    const filter = {
      license: license,
      "team.username": username,
      "team.password": "",
    };
    console.log();
    const update = {
      $set: { [`team.$.password`]: password },
    };
    const option = { new: true };

    doc = await management.findOneAndUpdate(filter, update, option);

    if (doc) {
      return {
        ...response.generic.success,
        detail: { username: username, license: license, profile: profile.team },
      };
    } else {
      return {
        ...response.management.team_registration_failed,
        detail: {},
      };
    }
  },

  async teamUpdate(params) {
    // username, user_token, management_id
    const { username, password, license } = params;
    let doc;
    if (username && password && license) {
      doc = await management.findOneAndUpdate(
        { license, "team.username": username, "team.password": "" },
        { $set: { [`team.$.password`]: password } },
        { new: true }
      );
    } else {
      return "invalid_register_information";
    }

    if (doc) {
      return response.generic.success;
    } else {
      return "no_such_user";
    }
  },
};
