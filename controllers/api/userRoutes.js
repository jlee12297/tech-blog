const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const {User,Gobble} = require('../../models');

router.get("/",(req,res)=>{
    User.findAll({
        include:[Gobble]
    }).then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json({msg:"ERROR",err})
    })
})

router.post("/",(req,res)=>{
    User.create({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    }).then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json({msg:"ERROR",err})
    })
})

router.post("/login",(req,res)=>{
    User.findOne({
        where:{
            email:req.body.email
        }
    }).then(foundUser=>{
        if(!foundUser){
            return res.status(401).json({msg:"invalid login credentials"})
        }
        if(!bcrypt.compareSync(req.body.password,foundUser.password)){
            return res.status(401).json({msg:"invalid login credentials"})
        }
        req.session.user={
            id:foundUser.id,
            username:foundUser.username,
            email:foundUser.email
        }
        return res.status(200).json(foundUser)
    }).catch(err=>{
        
        res.status(500).json({msg:"ERROR",err})
    })
})

module.exports = router;