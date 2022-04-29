const Mongoose = require("../db");



// 动态 field 设定：
// 方法一： {strict: false} 选项, security risks need validation
// 方法二： 根据 project 不同，在 service 层动态修改 projectModel
const UnitSchema = new Mongoose.Schema(
  {
    // customized properties
    // +
    unit_id: String,
    index: Array,
    contact: Array, // u_id[]
  },
  { strict: false }
);

const ProjectSchema = new Mongoose.Schema({
  p_name: String,
  p_id: String,
  m_id: String,
  key: Array,
  p_unit: [UnitSchema],
  function: Object,
  lastUpdatedTime: Date,
});

// const ContactSchema = new Mongoose.Schema({
//   name: String,
//   cellphone: String,
//   email: String,
//   wechat: String,
// });

// const MessageSchema = new Mongoose.Schema({
//   from: String,
//   to: String,
//   content: String,
//   sentAt: Date,
//   receivedAt: Date,
//   archievedAt: Date,
// });


module.exports = ProjectSchema;
