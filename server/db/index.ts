import mongoose, { ConnectOptions } from "mongoose";
const database = "demo";
const uri = process.env.MONGODB_CONNECTION + database;

const config = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 1000,
} as ConnectOptions;

const connectDB = async () => {
  await mongoose
    .connect(uri, config)
    .then(() => {
      console.log(`数据库连接成功: ${process.env.MONGODB_CONNECTION}`);
    })
    .catch((err) => {
      throw err;
    });

  mongoose.connection.on("error", (err) => {
    throw err;
  });
};

export { connectDB };
