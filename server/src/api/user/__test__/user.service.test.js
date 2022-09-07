import * as UserService from "../user.service";
import * as UserModel from "../user.model";
import * as response from "../user.response.json";
import * as jwt from "../../../../utils/jwt";
// mock

describe("User Service", () => {
  let ret;
  beforeEach(() => {
    ret = null;
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
  describe("Register", () => {
    let payload = { username: "foo", password: "123" };

    test("Register failed: duplicated username", async () => {
      let insertOne = jest
        .spyOn(UserModel, "insertOne")
        .mockImplementationOnce(async (username) => {
          throw new Error(`${username} already exists`);
        });
      ret = await UserService.register(payload);
      expect(insertOne).toHaveBeenCalledTimes(1);
      expect(ret).toStrictEqual({
        ...response.register.failure.duplicated_username,
        data: null,
      });
    });

    test("Register successful", async () => {
      let uid = "uid123";
      let token = "token123";
      jest.spyOn(jwt, "signToken").mockImplementation(() => token);
      let insertOne = jest
        .spyOn(UserModel, "insertOne")
        .mockImplementationOnce(async () => {
          return { uid };
        });
      ret = await UserService.register(payload);
      expect(insertOne).toHaveBeenCalledTimes(1);
      expect(ret).toStrictEqual({
        ...response.register.success,
        data: { uid, token },
      });
    });
  });
  test.todo("Deregister");
  test.todo("Login");
  test.todo("Get");

  test.todo("Update");
});
