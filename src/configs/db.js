const mongoose =require('mongoose');

const connect= async ()=>{
    console.log("In the db.js file")
    return  await mongoose.connect('mongodb+srv://vaibhav:vaibhav@cluster0.yqiug.mongodb.net/Hotel?retryWrites=true&w=majority')
}
module.exports=connect;