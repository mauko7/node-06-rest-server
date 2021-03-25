require("dotenv").config();
const express = require("express");
const colors=require("colors");
const {v4:uuidv4}=require("uuid")


const app = express();
const port=process.env.PORT ||3000;

app.use(express.json()); //esto de .use es un midelware,es como una configuracion que se agrega cuando levanta express.esto hace que si por mas que reciba string si es formto json lo pasa a json


app.get("/users",(req,res)=>{
    const users = [
        {
            id:1,
            name:"Mauro"
        },
        {
            id:2,
            name:"Marta"
        }
    ]
        res.json(users);// con este comando ya sabe que le vamos a devolver un json
        
})
app.post("/users",(req,res)=>{
    console.log(`POST WITH BODY ${req.body}`);
        const user = req.body;
        user.id= uuidv4();

        const result={
            message:"User Created",
            user
        }
        res.status(201).json(result); //status 201 es que esta creado. o se ale decimos que puso crearse lo que se intento persisitir
})
app.put("/users/:id",(req,res)=>{
//ir a la base de datos modificar el name y guardar
    const {id} = req.params;
    const user = req.body;
    
    user.id = id;

        const result={
            message:"User updated",
            user
        }
        res.json(result);
})
app.patch("/users/:id",(req,res)=>{

        const {id}=req.params;
        const user = req.body;

        user.id = id;
        const result={
            message:"User updated with patch",
            user
        }
        res.json(result);
})
app.delete("/users/:id",(req,res)=>{
        const{id} =req.params; //< esta destructurado pero tambien se podria escribir const id= rq.params.id

        const result={
            message:`User with id ${id} deleted`
        }
            res.json(result);
})

app.listen(port,()=>{
    console.log(`----Server on port ${port}----`.green);
})