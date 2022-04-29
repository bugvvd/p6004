let queue;

module.exports = (io, socket) => {
  socket.on("chat message", (message) => {
    const { content, from, to } = message;
    console.log(
      "incoming message: " +
        content +
        " from " +
        from +
        " to " +
        to +
        ` through socket: ${socket.id}`
    );

    // receiver is all the contact in the unit, except for the sender
    const receiver = connectedClients.get(to);
    switch (receiver) {
      // asynchronous chatting
      case undefined:
        console.log(`receiver ${to} is offline`);
        break;
      // synchronous chatting
      default:
        console.log(`sending message to socket: ${receiver.socketID}`);
        io.to(receiver.socketID).emit("chat message", message);

        break;
    }
  });
};
