import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  // uid: String,
  username: String,
  password: String,
});

const User = mongoose.model("User", UserSchema);

export default User;
