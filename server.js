const express =require("express");
const mongoose =require("mongoose");
const app=express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("<h1>Saman</h1>");
})

app.post('/',(req,res)=>{
    
})