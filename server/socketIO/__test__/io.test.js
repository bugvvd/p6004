const { createServer } = require("http");
const Client = require("socket.io-client");

describe("server socket io  test", () => {
  let io, serverSocket, clientSocket;
  beforeAll((done) => {
    const httpServer = createServer();
    io = require("../index").initIO(httpServer);
    console.log("");
    httpServer.listen(() => {
      clientSocket = new Client(
        `http://localhost:${httpServer.address().port}`
      );
      io.on("connection", (socket) => {
        serverSocket = socket;
      });
      clientSocket.on("connect", done);
    });
  });

  afterAll(() => {
    io.close();
    clientSocket.close();
  });

  test("update socket", (done) => {
    clientSocket.once("update", (payload) => {
      expect(payload).toBe("project info update");
      done();
    });
    serverSocket.emit("update", "project info update");
  });
});
