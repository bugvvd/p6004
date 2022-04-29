/**
 * PMC stands for Property Management Company
 */
const Mongoose = require("../db");

const TeamSchema = Mongoose.Schema({
  management_id: String,
  id: String,
  is_super_user: Boolean,
  username: String,
  name: String,
  password: { type: String, default: "" },
  last_login_time: { type: Number },
  is_deleted: { type: Boolean, default: false },
  cellphone: { number: String, isVerified: Boolean },
  weChat: { number: String, isVerified: Boolean },
  email: { address: String, isVerified: Boolean },
  //   privilege
});

const ManagementSchema = Mongoose.Schema({
  name: String,
  address: String,
  license: String,
  token: String,
  team: [TeamSchema],
  // array of project id
  // project: [String],
});

module.exports = ManagementSchema;