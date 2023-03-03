const express = require("express");
const { User , FavPackage} = require("../connection.js");

const router = express.Router();

//Routes for CRUD operations

router.get("/packages", async(req, res) => {
  const packages = await FavPackage.findAll();

  res.status(200).json(packages)
 
});


router.post("/npm/add", async(req, res) => {
  try {
    const { id, user_id, pack_name, comment } = req.body;
    const favPack = await FavPackage.create({
      id,
      user_id,
      pack_name,
      comment
    });

    res.status(200).json({
      message: "added to database",
      favPack
    })
  } catch (error) {
    res.status(400).json({
      message:"something wrong please try again later"
    })
  }

});
router.put("/api/npm/update", (req, res) => {});
router.delete("/api/npm/delete", (req, res) => {});


module.exports = router;