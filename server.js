const express =require("express");
const mongoose =require("mongoose");
const app=express();
app.use(express.json());
const PersonModel=require('./models/Person')
mongoose.connect("mongodb+srv://saman:saman@cluster0.lqho1lk.mongodb.net/Hotels?retryWrites=true&w=majority");
app.get('/',(req,res)=>{
    res.send("<h1>Saman</h1>");
})

app.post("/createPerson", async (req, res) => {
    const per= req.body
    console.log(req.body)
    const newRoom = new PersonModel(per)
    await newRoom.save()

    res.json(per)
})

  app.listen(3005,()=>{
    console.log("Server is running at 3005");
  })