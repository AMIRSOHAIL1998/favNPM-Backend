const express = require('express');
const {getUsers , addUser, deleteUser, updateUser} = require('../controller/userController')
const {validateUser} = require("../validators/validator")

const router = express.Router();

router.get('/users',getUsers)

router.post('/users/adduser', validateUser, addUser)

router.delete('/users/deleteuser' ,deleteUser)

router.put('/users/updateuser', updateUser)

module.exports = router;