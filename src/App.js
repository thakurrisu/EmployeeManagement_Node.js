
const express=require('express');
const { clearCookie } = require('express/lib/response');

const path=require('path')

//db connection
require(path.join(__dirname,('db/conn.js')))
const Employee=require(path.join(__dirname,'/models/Student'))


var app=express();
const port= 3000

app.use(express.json());
//Read
app.get("/student",async(req,res)=>{
    try{
        const data=await Employee.find()
        res.status(200).send(data)
    }
  catch(err){
    res.status(400).send(err);
    console.log(err);
  }
})
//create
app.post("/student",(req,res)=>{
    const data=new Employee(req.body)

    data.save().then(()=>{
        res.status(201).send(data)
     
    }).catch((err)=>{
        res.status(400).send(err);
        console.log(err);
    })
   
})











app.listen(port,()=>{
    console.log(`working on ${port}`)
})

