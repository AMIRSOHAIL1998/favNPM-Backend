const { FavPackage } = require("../connection.js");


exports.getPackages = async (req, res) => {
    const packages = await FavPackage.findAll();
  
    res.status(200).json(packages);
  }


exports.addPackage = async (req, res) => {
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
  }

exports.deletePackage = async (req, res) => {
    try {
      await FavPackage.destroy({
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
  }

exports.updatePackage = async (req, res) => {
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
  }