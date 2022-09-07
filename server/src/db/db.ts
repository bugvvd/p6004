import mongoose, { ConnectOptions } from "mongoose";
const database = "demo";
const uri = process.env.MONGODB_CONNECTION + database;

mongoose.connect(
  uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions,
  (err) => {
    if (err) {
      throw err;
    }
    console.log(`数据库连接成功: ${process.env.MONGODB_CONNECTION}`);
  }
);
