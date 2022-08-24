import userRouter from "../user.router";

describe("User Router", () => {
  let userRouterStack;
  beforeAll(() => {
    userRouterStack = userRouter.stack;
  });
  test("userRouter stack should match", () => {
    expect(userRouter.stack).toHaveLength(6);
  });
  test("GET /api/user", () => {
    const path = "/api/user";
    const route = userRouterStack.filter((route) => route.path === path)[0];
    expect(route.methods).toStrictEqual(["HEAD", "GET"]);
    expect(route.stack).toHaveLength(1);
  });
  test("POST /api/user/login", () => {
    const path = "/api/user/login";
    const route = userRouterStack.filter((route) => route.path === path)[0];
    expect(route.methods).toStrictEqual(["POST"]);
    expect(route.stack).toHaveLength(1);
  });
  test.todo("POST /api/user/logout");
  test.todo("POST /api/user/register");
  test.todo("DELETE /api/user/deregister");
  test.todo("PUT /api/user/update");
});
