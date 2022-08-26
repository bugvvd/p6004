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
  test("POST /api/user/register", () => {
    const path = "/api/user/register";
    const route = userRouterStack.filter((route) => route.path === path)[0];
    expect(route.methods).toStrictEqual(["POST"]);
    expect(route.stack).toHaveLength(1);
  });
  test("DELETE /api/user/deregister", () => {
    const path = "/api/user/deregister";
    const route = userRouterStack.filter((route) => route.path === path)[0];
    expect(route.methods).toStrictEqual(["DELETE"]);
    expect(route.stack).toHaveLength(1);
  });
  test("POST /api/user/login", () => {
    const path = "/api/user/login";
    const route = userRouterStack.filter((route) => route.path === path)[0];
    expect(route.methods).toStrictEqual(["POST"]);
    expect(route.stack).toHaveLength(1);
  });
  test("GET /api/user/get", () => {
    const path = `/api/user/get`;
    const route = userRouterStack.filter((route) => route.path === path)[0];
    expect(route.methods).toStrictEqual(["HEAD", "GET"]);
    expect(route.stack).toHaveLength(2);
  });
  test("PUT /api/user/update", () => {
    const path = "/api/user/update";
    const route = userRouterStack.filter((route) => route.path === path)[0];
    expect(route.methods).toStrictEqual(["PUT"]);
    expect(route.stack).toHaveLength(2);
  });
});
