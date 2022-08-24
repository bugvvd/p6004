import "dotenv/config";
import http from "http";
import https from "https";

import app from "./app";

const config = {
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

export const httpServer = http
  .createServer(app.callback())
  .listen(config.http.port, () => {
    console.log(`**** HTTP server starts at ${config.http.port}`);
  });

const sslConfig = {};
export const httpsServer = https
  .createServer(config.https.options, app.callback())
  .listen(config.https.port, () => {
    console.log(`**** HTTPS server starts at ${config.https.port}`);
  });
