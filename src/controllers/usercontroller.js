const express = require("express");

const router = express.Router();
const users = require("../models/user.model")


const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateToken = (user)=>{
    return jwt.sign({user},process.env.SECRET_KEY)
}
const register = async (req,res)=>{
    try{
        let user = await user.findOne({email:req.body.email})

        if(user){
            return res.status(400).send({message:"Email already exists"})

        }
        user =  await user.create(req.body);

        const token = generateToken(user)
        return res.status(200).send({user,token});
    }
    catch(err){
        return res.status(400).send(err.message)
    }
}
const login = async (req,res)=>{
    try{
        const user = await user.findOne({email:req.body.email})

        if(!user){
            return res.status(400).send({message:"Wrong Emailor Password"})

        }
        if(!match){
            return res.status(400).send({message:"Wrong Emailor Password"})
        }

        const token = generateToken(user)
        return res.status(200).send({user,token});
    }
    catch(err){
        return res.status(400).send(err.message)
    }
}
module.export= {register,login}