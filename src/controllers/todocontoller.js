const express = require("express");

const router = express.Router();
const todo = require("../models/todo.model");
const authenticate = require("../middleware/authenticate");

router.get("",authenticate,async(req,res)=>{
    try {
        const todos= await todo.find({}).lean().exec();
        return res.status(200).send(todos);
    } catch (err) {
        return  res.status(401).send({message:err.message})
    }
})

router.post("",authenticate,async(req,res)=>{
    req.body.userId= req.user._id
    try {
        const todo= await todo.create(req.body)
        return res.status(201).send(todo);
    } catch (err) {
        return res.status(401).send({message:err.message})
    }
})

router.get("/:id",authenticate,async(req,res)=>{
    try {
        const todo = await todo.findById(req.params.id).lean().exec();
        return res.status(200).send(todo);
    } catch (err) {
        return res.status(401).send({message:err.message})
    }
})

router.patch("/:id",authenticate,async(req,res)=>{
    try {
        const todo = await todo.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.status(200).send(todo);
    } catch (err) {
        return res.status(401).send({message:err.message})
    }
})

router.delete("/:id",authenticate,async(req,res)=>{
    try {
        const todo = await todo.findByIdAndDelete(req.params.id)
        return res.status(200).send(todo);
    } catch (err) {
        return res.status(401).send({message:err.message})
    }
})


module.exports=router


