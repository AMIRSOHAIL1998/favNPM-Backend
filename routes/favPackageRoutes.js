const express = require("express");
const { parse: uuidParse } = require("uuid");
const { FavPackage } = require("../connection.js");

const router = express.Router();

//Routes for CRUD operations

router.get("/packages", async (req, res) => {
  const packages = await FavPackage.findAll();

  res.status(200).json(packages);
});

router.post("/packages/add", async (req, res) => {
  try {
    const { user_id, pack_name, comment } = req.body;
    const favPack = await FavPackage.create({
      user_id,
      pack_name,
      comment,
    });

    res.status(200).json({
      message: "added to database",
      favPack,
    });
  } catch (error) {
    res.status(400).json({
      message: "something wrong please try again later",
      error,
    });
  }
});

router.put("/packages/update", async (req, res) => {
  try {
    const pk = req.body.id;
    const package = await FavPackage.findByPk(pk);
    if (package == null) {
      return res.status(200).json({
        message: "Fav NPM Package note found please try again",
      });
    }
    if (req.body.pack_name && req.body.comment) {
      await FavPackage.update(
        {
          pack_name: req.body.pack_name,
          comment: req.body.comment,
        },
        {
          where: { id: pk },
        }
      );
      res.status(201).json({
        message: " Fav NPM Package Updated with letest Comment.",
      });
    } else if (req.body.pack_name) {
      await FavPackage.update(
        {
          pack_name: req.body.pack_name,
        },
        {
          where: { id: pk },
        }
      );
      res.status(201).json({
        message: " Fav NPM Package Name Updated...!",
      });
    } else if (req.body.comment) {
      await FavPackage.update(
        {
          comment: req.body.comment,
        },
        {
          where: { id: pk },
        }
      );
      res.status(201).json({
        message: " Fav NPM Package Comment Updated...!",
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "Something wrong...!",
    });
  }
});
router.delete("/packages/delete", async (req, res) => {
  try {
    await User.destroy({
      where: { id: req.body.id },
    });

    res.status(200).json({
      message: "NPM Package Delete Successfull",
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to delete Try again",
      error,
    });
  }
});

module.exports = router;
