/**
 * respond with: ctx.body.detail = {...}
 */

const { models } = require("../model");
const project = models["project"];
const response = require("../response.json");

module.exports = {
  async register(data) {
    // console.log(data);
    // let res = await project.findOne(data);
    let res = false;

    if (!res) {
      res = await project.create(data);
      return {
        code: 0,
        data: null,
      };
    } else {
      return {
        code: -100,
        data: null,
      };
    }
  },

  async deregister(data) {
    let res = await project.findOne(data);
    if (res) {
      res = await project.deleteOne(data);
      return {
        code: 0,
        data: null,
      };
    } else {
      return {
        code: -100,
        data: null,
      };
    }
  },

  async update(data) {
    const { filter, update } = data;
    let res = await project.findOneAndUpdate(filter, update);
    if (res) {
      return {
        code: 0,
        message: `Update succeeded.`,
        data: null,
      };
    } else {
      return {
        code: -100,
        message: `Update failed`,
        data: null,
      };
    }
  },

  /**
   *
   * @param {*} params
   * @returns
   */
  async get(params) {
    let errorResponse,
      doc,
      filter,
      ret = [];
    console.log(params);
    let { profile } = params;
    switch (profile) {
      case "ROOT":
        break;
      case "ADMIN":
        break;
      case "TEAM":
        let { license } = params;
        filter = { m_id: license };
        doc = await project.find(filter);
        ret = doc;
        break;
      case "USER":
        let { units } = params;
        console.log(units);
        let p_id = units[0].split("-")[0];
        units = units.map((item) => [item.split("-")[0], item]);

        for (let unit of units) {
          filter = { p_id: unit[0], "p_unit.unit_id": unit[1] };
          doc = await project.find(filter);
          console.log(doc[0].p_unit);
          if (doc) {
            ret.push(
              doc[0].p_unit.filter((item) => item.unit_id === unit[1])[0]
            );
          }
        }
        break;
      default:
        break;
    }
    if (ret) {
      return { ...response.generic.success, detail: { result: ret } };
    } else {
      return { ...response.generic.failure };
    }
    // root

    // admin

    // team

    // user

    // const { id } = params;
    // let filter = { management: id };
    // doc = await project.find();
    // return doc;
  },
};
