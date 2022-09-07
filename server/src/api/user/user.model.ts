import User from "../../db/model/User";

const findOne = async (username: string) => {
  return await User.findOne({ username })
    .then((doc) => {
      if (doc) {
        return { uid: doc._id };
      } else {
        throw new Error(`${username} does not exist`);
      }
    })
    .catch((error) => {
      throw error;
    });
};

const findAll = async () => {};

const insertOne = async (username: string, passwordHash: string) => {
  await User.findOne({ username }).then((doc) => {
    if (doc) {
      throw new Error(`${username} already exists`);
    }
  });
  try {
    const newDoc = new User({ username, password: passwordHash });
    await newDoc.save();
    return { uid: newDoc._id.toString() };
  } catch (error) {
    throw error;
  }
};

const insertAll = async () => {};

const deleteOne = async (username: string, passwordHash: string) => {};

const deleteAll = async () => {};

const updateOne = async (username: string, field: object) => {};

const updateAll = async () => {};

export {
  findOne,
  findAll,
  insertOne,
  insertAll,
  deleteOne,
  deleteAll,
  updateOne,
  updateAll,
};
