const express = require ('express');
const router = express.Router();
const Slide = require('./modelSlide');





router.get(`/hystory1`,(req,res)=>{

    Slide.find({"slide.idSlide":"1_1_1"}).then(data=>{
        res.json({data})
    })




})


router.get(`/hystory1/:id`,(req,res)=>{

    Slide.find({"slide.idSlide":req.params.id}).then(data=>{
        res.json({data})
    })




})



module.exports=router;