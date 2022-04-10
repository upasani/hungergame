const mongoose=require('mongoose');

const hotelSchema=new mongoose.Schema({
    name:{type:String,required:true},
    title:{type:String,required:true},
    cost:{
        cost_one:{type:Number,required:true},
        cost_two:{type:Number,required:true}
    },
    payment_methods:{
        card:{type:Boolean,required:true},
        cash: {type:Boolean,required:true},
        upi: {type:Boolean,required:true}
    },
    img:{type:String,required:true},
    total_votes:{type:Number,required:true},
    reviews:{type:Number,required:true},
    star:{type:Number,required:true}

})
module.exports=mongoose.model('hotel',hotelSchema);