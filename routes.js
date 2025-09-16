const express = require('express');

const app = express();

//root route

app.get('/',(req,res)=>{
    res.send("this is my home page");
})


app.get("/clubs",(req,res)=>{
    const clubs = [
        {
            id: 1,
            name:'myCampusClub',
            rating:4.5
        },
        {
            id: 2,
            name:'rotaract',
            rating:4.0
        },
        {
            id: 1,
            name:'yoga club',
            rating:4.5
        }
            ];
            res.json(clubs);
})

app.get('/clubs/:id',(req,res)=>{
    const clubId = parseInt(req.params.id);
    const clubs = [
        {
            id: 1,
            name:'myCampusClub',
            rating:4.5
        },
        {
            id: 2,
            name:'rotaract',
            rating:4.0
        },
        {
            id: 1,
            name:'yoga club',
            rating:4.5
        }
            ];
    const clubsInfo = clubs.find(clubs=>clubs.id === clubId );
    if(clubsInfo){
        res.json(clubsInfo);
    }else{
        res.status(404).send("club not found");
    }
})


const port = 3001;

app.listen(port,()=>{
    console.log("server is listening");
    
})