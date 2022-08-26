import * as UserController from "../user.controller";
import * as UserService from "../user.service";

describe("User Controller", () => {
  let ctx;
  let next;
  beforeEach(() => {
    ctx = {
      request: { body: { username: "", password: "" } },
      response: { body: "" },
    };
    next = jest.fn();
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe("Register", () => {
    test("ctx.response.body takes is returned from UserService.register", async () => {
      ctx.request.body.username = "foo";
      ctx.request.body.password = "123";
      jest.spyOn(UserService, "register").mockImplementation(() => {
        return { whatever: "whatever" };
      });
      await UserController.register(ctx, next);
      expect(UserService.register).toHaveBeenCalledTimes(1);
      expect(UserService.register).toHaveBeenCalledWith({
        username: "foo",
        password: "123",
      });
      expect(next).toHaveBeenCalledTimes(1);
      expect(ctx.response.body).toStrictEqual({ whatever: "whatever" });
    });
  });
  describe("Deregister", () => {
    test("ctx.response.body takes is returned from UserService.deRegister", async () => {
      ctx.request.body.username = "foo";
      ctx.request.body.password = "123";
      jest.spyOn(UserService, "deRegister").mockImplementation(() => {
        return { whatever: "whatever" };
      });
      await UserController.deRegister(ctx, next);
      expect(UserService.deRegister).toHaveBeenCalledTimes(1);
      expect(UserService.deRegister).toHaveBeenCalledWith({
        username: "foo",
        password: "123",
      });
      expect(next).toHaveBeenCalledTimes(1);
      expect(ctx.response.body).toStrictEqual({ whatever: "whatever" });
    });
  });
  describe("Login", () => {
    test("ctx.response.body takes is returned from UserService.login", async () => {
      ctx.request.body.username = "foo";
      ctx.request.body.password = "123";
      jest.spyOn(UserService, "login").mockImplementation(() => {
        return { whatever: "whatever" };
      });
      await UserController.login(ctx, next);
      expect(UserService.login).toHaveBeenCalledTimes(1);
      expect(UserService.login).toHaveBeenCalledWith({
        username: "foo",
        password: "123",
      });
      expect(next).toHaveBeenCalledTimes(1);
      expect(ctx.response.body).toStrictEqual({ whatever: "whatever" });
    });
  });

  describe("Get", () => {
    test("ctx.response.body takes is returned from UserService.get", async () => {
      ctx.user = "foo";
      jest.spyOn(UserService, "get").mockImplementation(() => {
        return { whatever: "whatever" };
      });
      await UserController.get(ctx, next);
      expect(UserService.get).toHaveBeenCalledTimes(1);
      expect(UserService.get).toHaveBeenCalledWith("foo");
      expect(next).toHaveBeenCalledTimes(1);
      expect(ctx.response.body).toStrictEqual({ whatever: "whatever" });
    });
  });
  describe("Update", () => {});
});
