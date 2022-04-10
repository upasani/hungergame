const express=require('express');

const app=express();
const rest=require('./controller/rest.controller');
const connect=require('./configs/db');
const cors=require('cors');

app.use(express.json());
app.use(cors());



app.use('/get-restaurants',rest);
app.use('',rest)

app.listen(8080, async ()=>{
    try{
        await connect();
        console.log("listening on the port 8080")
        
    }catch(e){
        console.log(e);
    }
})