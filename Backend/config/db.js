const mongoose=require("mongoose");
require("dotenv").config();

const url=process.env.MongoDB_URL;
const connectdb=async()=>(
 await mongoose.connect(url)
.then(()=>{
    console.log("connected successfully");
})
.catch((err)=>{
    console.log("DB have some error");
console.log(err.message);
process.exit(-1);
})
)


module.exports=connectdb;