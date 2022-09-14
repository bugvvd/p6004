import "dotenv/config";
import http from "http";
import https from "https";

import app from "./app";
import { connectDB } from "./db";

let httpServer;
let httpsServer;
const sslConfig = {};
const serverConfig = {
  domain: "",
  http: { port: process.env.HTTP_SERVER_PORT || 3000 },
  https: {
    port: process.env.HTTPS_SERVER_PORT || 3001,
    options: {
      // key: fs
      //   .readFileSync(path.resolve(process.cwd(), "certs/privkey.pem"), "utf8")
      //   .toString(),
      // cert: fs
      //   .readFileSync(
      //     path.resolve(process.cwd(), "certs/fullchain.pem"),
      //     "utf8"
      //   )
      //   .toString(),
    },
  },
};

const boot = async () => {
  await connectDB();

  httpServer = http
    .createServer(app.callback())
    .listen(serverConfig.http.port, () => {
      console.log(`**** HTTP server starts at ${serverConfig.http.port}`);
    });

  httpsServer = https
    .createServer(serverConfig.https.options, app.callback())
    .listen(serverConfig.https.port, () => {
      console.log(`**** HTTPS server starts at ${serverConfig.https.port}`);
    });
};

boot();
