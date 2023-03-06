const express = require("express");
const {getPackages, addPackage, deletePackage, updatePackage} = require('../controller/favPackageController')
const { parse: uuidParse } = require("uuid");

const router = express.Router();

//Routes for CRUD operations

router.get("/packages", getPackages);

router.post("/packages/add", addPackage);

router.put("/packages/update", updatePackage);

router.delete("/packages/delete", deletePackage);

module.exports = router;
