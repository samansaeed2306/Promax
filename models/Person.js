const express=require("express");
const app=express();
app.use(express.json());
const mongoose=require("mongoose");

const PersonSchema=mongoose.Schema({
    Name:{
    type:String
}





})
const PersonModel=mongoose.model("Person",PersonSchema)
module.exports=PersonModel;