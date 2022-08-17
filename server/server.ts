import "dotenv/config";
import http from "http";
import https from "https";

import app from "./app";

const httpPort = process.env.HTTP_SERVER_PORT || 3000;
export const httpServer = http
  .createServer(app.callback())
  .listen(httpPort, () => {
    console.log(`**** HTTP server starts at ${httpPort}`);
  });

const httpsPort = process.env.HTTPS_SERVER_PORT || 3001;
export const httpsServer = https
  .createServer(app.callback())
  .listen(httpsPort, () => {
    console.log(`**** HTTPS server starts at ${httpsPort}`);
  });
