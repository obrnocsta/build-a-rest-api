import http from "node:http";
import { getData } from "./database/getData.js";

const PORT = 8000;

const server = http.createServer(async (req, res) => {
  const data = await getData();
  if (req.url === "/api" && req.method === "GET") {
    res.end(JSON.stringify(data));
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});
