require("dotenv/config");
console.log(
  `**** NODE_ENV: ${process.env.NODE_ENV}  || USER: ${process.env.USER}`
);

const app = require("./app");

/**
 * Good to go. Server is established.
 */
const http = require("http");
const server = http.createServer(app.callback());
server.listen(process.env.SERVER_PORT, () => {
  console.log(`**** Server starts at ${process.env.SERVER_PORT}`);
});

/**
 * Establish websocket service
 */
const io = require("./socketIO").initIO(server, () => {});
app.io = io;

module.exports = server;
