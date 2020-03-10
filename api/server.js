const express = require("express");

const hubsRouter = require("../hubs/hubs-router.js");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  const query = req.query;

  console.log("query", query);

  res.status(200).json(query);
});

// the router handles endpoints that begin with /api/hubs
server.use("/api/hubs", hubsRouter);

module.exports = server;

// test by making a GET request to http://localhost:5000/api/hubs
