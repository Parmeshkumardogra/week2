const mongoose =require("mongoose");
require('mongoose-currancy').loadType(mongoose);
const promoSchemea=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    image:{
        type:String,
        required:true
    },
    label:{
        type:String,
        default:""
    },
    price:{
        type:Number,
        required:true,
        min:0
    },
    description:{
        type:String,
        rquired:true  
    },
    featured:{
        type:Boolean,
        required:false
    }
},  
{
        timestamps:true
});
var Promotions=mongoose.model("Promotion",promoSchemea);
module.exports=Promotions;