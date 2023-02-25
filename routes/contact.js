const { Router } = require('express');
const express=require('express');
const path=require('path');
const rootDir=require('../utill/path');

const router=express.Router();
 router.get('/contact-us',(req,res)=>{
    res.sendFile(path.join(rootDir,'views','contact.html'));
 })

 router.post('/success',(req,res)=>{
    res.send('<h1>Form successfuly filled</h1>')
 })

 module.exports=router;