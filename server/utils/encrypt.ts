import bcrypt from "bcrypt";

const saltRounds = 12;

const encryptPassword = async (plainTextPassword: string) => {
  return await bcrypt
    .hash(plainTextPassword, saltRounds)
    .then((hash) => {
      return hash;
    })
    .catch((error) => {
      throw error;
    });
};

const verifyPassword = async (plainTextPassword: string, hash: string) => {
  return await bcrypt
    .compare(plainTextPassword, hash)
    .then((res) => res)
    .catch((error) => {
      throw error;
    });
};

export { encryptPassword, verifyPassword };
