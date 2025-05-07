const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
title:{
    type:String,
    required:true,
},
author:{
    type:String,
    required:true,
},
content:{
    type:String,
    required:true,
},

},
{
    timestamps:{
        createdAt:true,
        updatedAt:true
    }
}

)


const Post=mongoose.model("Post",userSchema);

module.exports=Post;