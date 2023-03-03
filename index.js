const express = require("express");
require("./connection.js")

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("from the server");
});

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
