/**
 * router test
 */
require("dotenv/config");
const app = require("../../app");
const request = require("supertest");

// index
describe("App Index page", () => {
  it("should return a 200 status code", async () => {
    const response = await request(app.callback()).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Hello Koa!");
  });
});

// project end points

// management end points

// user end points
