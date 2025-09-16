const express = require('express');

const app = express();

//creating my first middleware

app.use((req,res,next)=>{
    console.log("middle ware is one");
    next();
})

app.use((req,res,next)=>{
    console.log("middle ware two")
    // next();
})


app.get("/",(req,res)=>{
    res.send("home page")
})

app.get("/about",(req,res)=>{
    res.send("about page")
})

app.listen(3000,()=>{
    console.log("server is running");
    
})