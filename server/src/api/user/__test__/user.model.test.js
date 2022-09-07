import * as mongod from "../../../db/__test__/test-db";
import * as UserModel from "../user.model";
import User from "../../../db/model/User";

beforeAll(async () => {
  await mongod.connect();
});
afterEach(async () => {
  await mongod.clear();
});
afterAll(async () => {
  await mongod.stop();
});

describe("User", () => {
  test("Find one User", async () => {
    try {
      await UserModel.findOne("foo", "bar");
    } catch (error) {
      expect(error.message).toMatch("foo does not exist");
    }
  });
  test("Insert one User", async () => {
    const { uid } = await UserModel.insertOne("foo", "bar");
    const user = await User.findById(uid);
    expect(user.username).toBe("foo");
    try {
      await UserModel.insertOne("foo", "bar");
    } catch (error) {
      expect(error.message).toMatch("foo already exists");
    }
  });
});
