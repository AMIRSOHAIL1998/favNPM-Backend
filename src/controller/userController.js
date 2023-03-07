const {User} = require('../connection')
const bcrypt = require('bcrypt')

exports.getUsers = (req,res) => {
    res.status(200).json({message:"All Users details fetched successfully"})
}

exports.signUp = async(req,res)=>{
    try {
        const {name, email, contact,password} = req.body;
        const hash_password = await bcrypt.hashSync(password,10);
        const user = await User.create({
            name,
            email,
            contact,
            password: hash_password
        })

        res.status(200).json(user);

    } catch (error) {
        res.status(403).json({
            message:"Something Wrong Try Again...!",
            error
        })
    }
}

exports.deleteUser = async(req,res)=>{
    try {
        const uid = req.body.id;
        await User.destroy({
            where: {id:uid}
        })

        res.status(200).json({
            message:"Delete Successfull"
        })
    } catch (error) {
        res.status(400).json({
            message:"Failed to delete Try again",
            error
        })
    }
}

exports.updateUser = async(req,res)=>{
    try {
        const uid = req.body.id
        const user = await User.findOne({
            where:{id:uid}
        })
        if(user == null){
           return res.status(200).json({
                message:"user not found please try again...!"
            })
        }
        else if (req.body.name && req.body.email){
        await User.update({
                name:req.body.name,
                email:req.body.email
            },{
                where:{id:uid}
            })

            res.status(201).json({
                message:"User name and email updated",
            })

        }
        else if(req.body.name){
           await User.update({
                name: req.body.name
            },{
                where: {id:uid}
            })
            res.status(201).json({
                message:"User name updated",
            })
        }
        else if(req.body.email){
        await User.update({
                email: req.body.email
            },{
                where: {id:uid}
            })
            res.status(201).json({
                message:"User email updated",
            })
        }
        

    } catch (error) {
        res.status(400).json({
            message:"Something wrong...!",
            error
        })
    }
}

exports.signIn = async(req,res) =>{
    try {
        const user = await User.findOne({where:{email:req.body.email}})
        const {name,email,contact,role,password} = user;
        const checkPassword = bcrypt.compareSync(req.body.password,user.password);
        if(checkPassword){

            res.status(200).json({
                name,
                email,
                contact,
                role
            })
        }else{
            res.status(400).json({
                message:"Password is incorrect please try again"
            })
        }
    } catch (error) {
        res.status(500).json({message:"server error...!"})
    }
}