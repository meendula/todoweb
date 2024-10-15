const express=require('express');
const bcrypt=require('bcrypt');
const app=express();
const path=require('path');
const collection=require('./config');
app.set('view engine','ejs');

app.use(express.static("public"));

app.get('/',(req,res)=>{
    res.render("login");
});

app.get('/signup',(req,res)=>{
    res.render("signup");
});

app.get('/signup',async(req,res)=>{
   const data={
    name: req.body.username,
    email:req.body.email,
    password: req.body.password


   }
   const userdata=await collection.insertMany(data)
})
app.listen(3000,()=>{
    console.log("server is running on port 3000");
})