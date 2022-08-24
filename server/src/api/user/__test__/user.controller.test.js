import * as UserController from "../user.controller";
import * as UserService from "../user.service";

// mock service
jest.mock("../user.service", () => {
  return {
    login: jest.fn(() => {
      return {
        token: "testToken",
      };
    }),
  };
});

describe("User Controller", () => {
  let ctx;
  let next;
  beforeEach(() => {
    ctx = {};
    next = jest.fn();
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test("Login", async () => {
    ctx = {
      request: { body: { username: "foo", password: "bar" } },
      response: { body: "" },
    };
    await UserController.login(ctx, next);
    expect(UserService.login).toHaveBeenCalledTimes(1);
    expect(UserService.login).toHaveBeenCalledWith({
      username: "foo",
      password: "bar",
    });
    expect(next).toHaveBeenCalledTimes(1);
    expect(ctx.response.body).toStrictEqual({ token: "testToken" });
  });
  test.todo("Logout");
  test.todo("Register");
  test.todo("Deregister");
  test.todo("Update");
});
