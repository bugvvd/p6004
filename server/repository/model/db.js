/**
 * db.js 负责通过读取 config.js 文件中提供配置信息的建立 mongoose 与 mongodb 的连接
 * 导出 mongodb 实例供外部调用
 */
const mongoose = require("mongoose");
const { CONNECTION_STRING } = require("./config");
const databaseName = "demo";
const uri = CONNECTION_STRING + databaseName;

/**
 * 建立数据库连接
 */
// 如果 uri 所指向的 database 不存在，mongodb 会直接新建一个 db，db 下面再保存 collection
mongoose.connect(
  uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`数据库连接成功: ${process.env.DB_CONNECTION}`);
  }
);

module.exports = mongoose;
