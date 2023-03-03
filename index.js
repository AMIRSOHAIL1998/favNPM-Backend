const express = require("express");
require("./connection.js")
const AddRouter = require('./routes/routes')

const app = express();

app.use(express.json());
app.use("/api",AddRouter);

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
