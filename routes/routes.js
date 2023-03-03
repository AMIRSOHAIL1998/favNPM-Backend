const express = require("express");
const { User , FavPackage} = require("../connection.js");

const router = express.Router();

//Routes for CRUD operations

router.get("/api", (res, res) => {
  const { id , user_id, pack_name, comment } = res.body;
  const user = new User({
    id,
    user_id,
    pack_name,
    comment
  });
});


router.post("/api/npm/add", (res, res) => {
  try {
    const { id , user_id, pack_name, comment } = res.body;
    const favPack =FavPackage.create({
      id,
      user_id,
      pack_name,
      comment
    });
  } catch (error) {
    
  }

});
router.put("/api/npm/update", (res, res) => {});
router.delete("/api/npm/delete", (res, res) => {});
