const express = require("express");
const { User } = require("../connection.js");

const router = express.Router();

//Routes for CRUD operations

router.get("/api", (res, res) => {
  const { name, comment, packName } = res.body;
  const user = new User({
    name,
    comment,
    id,
    packName,
  });
});
router.post("/api/npm/add", (res, res) => {
  const { name, comment, packName } = res.body;
  const user = new User({
    name,
    comment,
    packName,
  });

  user.save();
});
router.put("/api/npm/update", (res, res) => {});
router.delete("/api/npm/delete", (res, res) => {});
