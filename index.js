const express = require("express");
require("./connection.js")
const favPackageRoute = require('./routes/favPackageRoutes')
const userRoutes = require('./routes/userRoutes')

const app = express();

app.use(express.json());
app.use("/api",favPackageRoute);
app.use('/api',userRoutes);

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
