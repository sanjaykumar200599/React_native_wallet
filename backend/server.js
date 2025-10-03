//const express=require('express');  change the type in package.json
import express from 'express';
const app=express();
const PORT=5001;
app.get("/",(req,res)=>{
    res.send("hello world");
})
app.listen(PORT,()=>{
    console.log(`server running at port PORT :${PORT}`);
    
})