import * as jwt from "jsonwebtoken";

enum Secret {
  user = "user_secret",
  management = "management_secret",
  admin = "admin_secret",
  project = "project_secret",
}

const signToken = (username: string, type: keyof typeof Secret): string => {
  return jwt.sign(username, Secret[type]);
};


const verifyToken = (token: string, type: keyof typeof Secret): boolean => {
  try {
    // options
    // https://www.npmjs.com/package/jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback
    let payload = jwt.verify(token, Secret["user"]);
    let isExpired = false;
    return !isExpired;
  } catch (error) {
    throw error;
  }
};

export { signToken, verifyToken };
