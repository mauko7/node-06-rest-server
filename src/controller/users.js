const express = require("express");
const {v4:uuidv4}=require("uuid")

//implementacion de rutas



/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const getAllUsers=(req,res)=>{
    const users=[
        {
            id:1,
            name:"Mauro"
        },
        {
            id:2,
            name:"Marta"
        }
    ]
    
    res.json(users);
};
/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const createUser =(req,res)=>{
    const user=req.body;
    user.id=uuidv4();
    const result = {
        message:"User created",
        user
    }
    res.status(201).json(req.body);
    
};
/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const updateUser = (req,res)=>{
    const {id} = req.params;
    const user = req.body;

    user.id = id;

    const result = {
        message:"User updated",
        user
    }
    res.json(result);
}

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const updatePatchUser=(req,res)=>{
    const {id} = req.param;
    const user = req.body;

    user.id = id;

    const result = {
        message:"User updated with patch",
        user
    }
    res.json(result)
}
/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const deleteUser=(req,res)=>{
    const {id}=req.params; // o const id = req.params.id
    const result = {
        message:`User with id ${id} deleted`
    }
    res.json(result)
}

module.exports={
    getAllUsers,
    createUser,
    updateUser,
    updatePatchUser,
    deleteUser
}