/**
    server.js

    @author:
      - Derek Johnston

    @desc:
      - The primary endpoint for the web application.
*/
import express from "express";
import path from "path";

const server  = express();
const port    = process.env.PORT || 8888;
const dir     = path.join(__dirname, "public");
const staticMiddleware  = express.static(dir);

server.use(staticMiddleware);

server.listen(port, () => {
  console.log("Donate to Dreams is running on port:", port);
});
