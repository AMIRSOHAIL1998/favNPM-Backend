const { async } = require('validate.js');
const {User} = require('../connection')
const bcrypt = require('bcrypt');


exports.userRoleAuth = async(req,res,next) => {
    const user = await User.findOne({where:{email:req.body.email}})
    if(!user){
       return res.status(400).json({
            message: "User not found check your details...!"
        })
    }
    next();

}