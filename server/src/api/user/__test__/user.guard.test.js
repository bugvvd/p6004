import * as UserGuard from "../user.guard";

// mock

describe("User Guard", () => {
  let ctx;
  let next;
  beforeEach(() => {
    ctx = {
      request: { body: { username: "", password: "" } },
      response: { status: "", body: "" },
    };
    next = jest.fn();
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe("Body Validator", () => {
    describe("Register", () => {
      test("Validation failed", async () => {
        // missing  field
        delete ctx.request.body.username;
        ctx.request.body.password = "1234567";
        await UserGuard.validateBody(ctx, next);
        expect(ctx.response.body).toBe('"username" is required');

        // invalid field
        ctx.request.body.username = "foo";
        await UserGuard.validateBody(ctx, next);
        expect(next).toHaveBeenCalledTimes(0);
        expect(ctx.response.status).toBe(422);
        expect(ctx.response.body).toBe(
          '"username" length must be at least 6 characters long'
        );

        // field not allowed
        ctx.request.body.username = "foo123456";
        ctx.request.body.a = "aaaaa";
        await UserGuard.validateBody(ctx, next);
        expect(next).toHaveBeenCalledTimes(0);
        expect(ctx.response.status).toBe(422);
        expect(ctx.response.body).toBe('"a" is not allowed');
      });

      test("Validation successful", async () => {
        ctx.request.body.username = "foo123123";
        ctx.request.body.password = "password123";
        await UserGuard.validateBody(ctx, next);
        expect(next).toHaveBeenCalledTimes(1);
      });
    });
    test.todo("Deregister");
    test.todo("Login");
  });

  describe("Token Validator", () => {
    test.todo("Get");
    test.todo("Update");
  });
});
