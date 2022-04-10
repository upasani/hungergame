const express=require('express');
const app=express();
const router=express.Router();
const Hotel=require('../model/restaurant.model')
app.use(express.json());


// app.use(express.json());


router.get("",async (req,res)=>{
    // console.log("In the console");
    let page=req.query.page||1,size=4,star_cnt=req.query.star||1,sorted=req.query.sort||'Asc';
    let val=await Hotel.find().skip((page-1)*size).limit(size).lean().exec();
    // console.log("The params are",req.query);

    val=val.filter((e)=>{
        return star_cnt<=e.star;
    });
    // console.log(val);
    // console.log(val)
    // if(sorted=='Asc'){
    //     val.sort((a,b)=>{
    //         return a-b;
    //     })
    // }else{
    //     val.sort((a,b)=>{
    //         return a.cost.cost_one
    //     })
    // }

    return res.send(val);

})
router.post('/add-info',async (req,res)=>{
    const val=await Hotel.create(req.body);
    console.log("Data added succesfully");

    return res.send("In the post method");
})
module.exports=router;
