import request from "supertest";
import app from "../app";

describe("API end point", () => {
  describe("", () => {
    it("should return '404 NOT FOUND' with wrong end point", async () => {
      const response = await request(app.callback()).get("/api/wrongep");
      expect(response.status).toBe(404);
      expect(response.text).toBe("Not Found");
    });
    it("should return '405 Method Not Allowed' with correct end point but wrong method", async () => {
      const response = await request(app.callback()).post("/");
      expect(response.status).toBe(405);
      expect(response.text).toBe("Method Not Allowed");
    });
  });
  describe("User", () => {
    test("GET /api/user", async () => {
      const response = await request(app.callback()).get("/api/user");
      expect(response.status).toBe(200);
      expect(response.text).toBe("Hello User!");
    });
    test.todo("POST /api/user/register");
    test.todo("DELETE /api/user/deregister");
    test.todo("POST /api/user/login");
    test.todo("GET /api/user/:id");
    test.todo("PUT /api/user/update");
    
  });
  describe("Management", () => {
    test("GET /api/management", async () => {
      const response = await request(app.callback()).get("/api/management");
      expect(response.status).toBe(200);
      expect(response.text).toBe("Hello Management!");
    });
  });
  describe("Project", () => {
    test("GET /api/project", async () => {
      const response = await request(app.callback()).get("/api/project");
      expect(response.status).toBe(200);
      expect(response.text).toBe("Hello Project!");
    });
  });
});

test("Hello world works", async () => {
  const response = await request(app.callback()).get("/");
  expect(response.status).toBe(200);
  expect(response.text).toBe("Hello P6004!");
});
