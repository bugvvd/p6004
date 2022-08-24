import * as UserController from "../user.controller";
import * as UserService from "../user.service";

// mock service
jest.mock("../user.service", () => {
  return {
    login: jest.fn(() => {}),
  };
});

describe("User Controller", () => {
  let next;
  beforeEach(() => {
    next = jest.fn();
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test("Login", () => {
    UserController.login({}, next);
    expect(UserService.login).toHaveBeenCalledTimes(1);
    expect(next).toHaveBeenCalledTimes(1);
  });
  test.todo("Logout");
  test.todo("Register");
  test.todo("Deregister");
  test.todo("Update");
});
