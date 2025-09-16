const express = require('express');
const path = require('path')
const app = express();


app.set('view engine','ejs');

app.set('views',path.join(__dirname));

const products = [
    {
        id:1,
        name:'phone'
    },
    {
        id:2,
        name:'lap'
    },
    {
        id:3,
        name:'tab'
    }
];

app.get('/',(req,res)=>{
    res.render('home',{title:'home',products: 'products'})
})

app.get("/about",(req,res)=>{
    res.render('about',{title:'about'})
})

const port = 3000;

app.listen(port,()=>{
    console.log('server is running...');
    
})