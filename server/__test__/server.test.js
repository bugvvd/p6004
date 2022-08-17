import request from "supertest";
import http from "http";
import https from "https";
import app from "../app";

describe("Server", () => {
  let httpServer;
  let httpsServer;
  beforeAll(async () => {
    httpServer = require("../server").httpServer;
    httpsServer = require("../server").httpsServer;
  });
  afterAll(() => {
    httpServer.close();
    httpsServer.close();
  });
  test("Server works", () => {
    expect(httpServer).toBeInstanceOf(http.Server);
    expect(httpServer.address().port).toBe(
      parseInt(process.env.HTTP_SERVER_PORT)
    );
    expect(httpsServer).toBeInstanceOf(https.Server);
    expect(httpsServer.address().port).toBe(
      parseInt(process.env.HTTPS_SERVER_PORT)
    );
  });
  test("'Hello P6004!' works", async () => {
    const response = await request(app.callback()).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello P6004!");
  });
});
