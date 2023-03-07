const express = require('express');
const { async } = require('validate.js');
const {getUsers , signUp, deleteUser, updateUser, signIn} = require('../controller/userController')
const {validateUser} = require("../validators/validator")
const {userRoleAuth} = require('../auth/auth')

const router = express.Router();

router.get('/users',getUsers)

router.post('/users/signup', validateUser, signUp)

router.delete('/users/deleteuser' ,deleteUser)

router.put('/users/updateuser', updateUser)

router.post('/users/login',userRoleAuth, signIn);

module.exports = router;