const express = require('express');
const {User} = require('../connection')

const router = express.Router();


router.get('/users',(req,res) => {
    res.status(200).json({message:"All Users details fetched successfully"})
})


router.post('/users/adduser',async(req,res)=>{
    try {
        const {name, email, contact} = req.body;
        const user = await User.create({
            name,
            email,
            contact
        })

        res.status(200).json(user);

    } catch (error) {
        res.status(403).json({
            message:"Something Wrong Try Again...!",
            error
        })
    }
})

router.delete('/users/deleteuser' ,async(req,res)=>{
    try {
        console.log(uid);
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
})

router.put('/users/updateuser', async(req,res)=>{
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
})

module.exports = router;