import * as mongod from "../../../db/__test__/test-db";
import * as UserModel from "../user.model";
import User from "../../../db/model/User";

beforeAll(async () => {
  await mongod.connect();
});

beforeEach(async () => {
  await mongod.clear();
});

afterAll(async () => {
  await mongod.stop();
});

describe("User", () => {
  test("Find one User", async () => {
    await expect(UserModel.findOne("foo", "bar")).rejects.toThrow();
  });
  test("Insert one User", async () => {
    const { uid } = await UserModel.insertOne("foo", "bar");
    const user = await User.findById(uid);
    expect(user.username).toBe("foo");
    await expect(UserModel.insertOne("foo", "bar")).rejects.toThrowError();
  });
});
