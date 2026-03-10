import http from "node:http";
import { getData } from "./database/getData.js";
import { json } from "node:stream/consumers";

const PORT = 8000;

const server = http.createServer(async (req, res) => {
  const data = await getData();
  if (req.url === "/api" && req.method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(data));
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        error: "not found",
        message: "The requested route does not exist",
      }),
    );
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});
