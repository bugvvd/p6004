let io;

const connectedClients = new Map();
const liveChatrooms = new Map();
const getKeyByValue = require("../util/getKeyByValue.js");

const onSocketConnected = (socket) => {
  const socket_id = socket.id;
  const { client, payload } = socket.handshake.headers;
  // console.log(payload);

  console.log("a client is connected. client's socket id is: " + socket_id);

  connectedClients.set(client, { socket_id, payload });
  console.log(
    "New connected socket is: ",
    getKeyByValue(connectedClients, { socket_id, payload })
  );
  console.log("All connected clients are: ", connectedClients);

  // A connection is automatically terminated if client has refreshed. probably in _idleTimeout: 45000ms?.
  // server-side reload/refresh will just reload the service, empty the connectedClients sets
  // and re-map existing connection with a new socket object.

  // handle idle sockets on server-side refresh/reload later
  socket.on("disconnect", (reason) => {
    console.log(reason, socket_id + " is closed.");
    // manual disconnection from be seems unnecessary
    // socket.disconnect();
    const disconnectingUser = getKeyByValue(connectedClients, { socket_id });
    connectedClients.delete(disconnectingUser);
    console.log(`client ${disconnectingUser} is disconnected.`);
    console.log("connected clients are: ", connectedClients);
  });

  require("./handler/message.handler")(io, socket);
};

/**
 * singular class pattern
 */
module.exports = {
  initIO: (server) => {
    io = require("socket.io")(server);
    io.on("connection", onSocketConnected);
    return io;
  },
  getIO: () => {
    if (!io) {
      throw new Error("SocketIO is not established");
    }
    return io;
  },
};
