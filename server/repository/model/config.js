/**
 * config.js 负责从 .env 引入当前运行环境的变量，作为 Mongoose 读取 mongodb 配置信息的入口
 */
module.exports = {
  CONNECTION_STRING: process.env.DB_CONNECTION,
};

