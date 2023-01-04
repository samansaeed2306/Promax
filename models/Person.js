const express=require("express");
const app=express();
app.use(express.json());
const mongoose=require("mongoose");

const PersonSchema=mongoose.Schema({
Fname:{
    type:String,
},
Email:{
    type:String
}





})
const PersonModel=mongoose.model("Person",PersonSchema)
module.exports=PersonModel;