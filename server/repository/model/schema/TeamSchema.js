const Mongoose = require("../db");

const TeamSchema = Mongoose.Schema({
  management_id: String,
  id: String,
  is_super_user: Boolean,
  username: String,
  name: String,
  password: { type: String, default: "" },
  userToken: String,
  cellphone: { number: String, isVerified: Boolean },
  weChat: { number: String, isVerified: Boolean },
  email: { address: String, isVerified: Boolean },
  //   privilege
});
