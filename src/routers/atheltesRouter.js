const express=require('express')
const router=new express.Router();
const Atheltes=require('../model/Athletes')

router.get("/",(req,res)=>{
    res.send('Hello there..!!!')
})

router.post("/atheltes",async(req,res)=>{
    try {
        
        const atheltesData=new Atheltes(req.body);
         console.log('Athelte Record',atheltesData)
        const postAthData=await atheltesData.save();
        res.status(200).send(postAthData);
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/atheltes',async(req,res)=>{
    try {
        const getMenData=await Atheltes.find({}).sort({"ranking":1})
        if(!getMenData)
        {
            res.status(404).send();
        }
        else{
            res.status(200).send(getMenData)
        }

    } catch (error) {
        res.status(400).send(error) 
    }
})


router.get("/atheltes/:id",async(req,res)=>{
    try {
        
        const id=req.params.id;
        const getDataAthId=await Atheltes.findById(id)
        if(!getDataAthId)
        {
            res.status(400).send()
        }
        else
        {
            res.status(200).send(getDataAthId)
        }
        
    } catch (error) {

        res.status(400).send(error)
    }
})

router.patch("/atheltes/:id",async(req,res)=>{
    try {
        
        const id=req.params.id;
        const updateDataAthId=await Atheltes.findByIdAndUpdate(id,req.body,{
            new:true
        })
        console.log(updateDataAthId)
        if(!updateDataAthId)
        {
            res.status(400).send()
        }
        else
        {
            res.status(200).send(updateDataAthId)
        }
        
    } catch (error) {

        res.status(400).send(error)
    }
})

router.delete("/atheltes/:id",async(req,res)=>{
    try {
        
        const id=req.params.id;
        const deleteDataAthId=await Atheltes.findByIdAndDelete(id)
        console.log(deleteDataAthId)
        if(!deleteDataAthId)
        {
            res.status(400).send()
        }
        else
        {
            res.status(200).send(deleteDataAthId)
        }
        
    } catch (error) {

        res.status(400).send(error)
    }
})



module.exports=router;
