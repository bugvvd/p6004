const Mongoose = require("../db");

module.exports = Mongoose.Schema({
  // u_id: {type: String, required: true},
  username: { type: String, required: true },
  password: { type: String, required: true },
  name: String,
  cellphone: { type: String, required: true },
  contact: {
    wechat: String,
    email: String,
  },
  isVerified: {
    isEmailVerified: { type: Boolean, required: false },
    isCellphoneVerified: { type: Boolean, required: false },
  },
  // based on encoded registered url: staff identity is confirmed here
  // 员工信息录入应该由 PMC 的 superAdmin 来负责
  units: {
    type: [String],
  },
  lastLoginTime: {
    type: Date,
  },
  // not applicable for commercial version
  isCommittee: { type: Boolean, required: false },
});
