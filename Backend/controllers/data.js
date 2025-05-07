const post=require("../models/user");



const all=async(req,res)=>{
    try{
        const data=await post.find();
        console.log(data);
        if(!data){
            return res.status(404).json({
                success:false,
                message:"No data found",
            })
        }

        res.status(200).json({
            success:true,
            message:"data fetch successfully",
            data:data
        })

    }catch(err){
       res.status(500).json({
        success:false,
        message:"Internal server error",
        error:err.message
       })
    }
}

const singleton=async(req,res)=>{
    try{
      let id=req.params.id;
      const data=await post.findById(id);
console.log(data)
      if(!data){
        return res.status(404).json({
            success:false,
            message:"No data found",
        })
      }

      res.status(200).json({
        success:true,
        message:"data fetch successfully",
        data:data
    })


    }catch(err){
        res.status(500).json({
            success:false,
            message:"Internal server error",
            error:err.message
           })
    }
}



const create=async(req,res)=>{
    try{
       const {title,author,content}=req.body;
       console.log(title,author,content);

       if(!title || !author ||!content ){
        return res.status(401).json({
            success:false,
            message:"Please fill all fields",
            error:"Invalid request"
           })
       }

       const user1=new post({
        title:title,
        author:author,
        content:content
       })

       const final=await user1.save();
       console.log(final);

       res.status(200).json({
        success:true,
        message:"user created successfully",
        data:final,
       });

    }catch(err){
res.status(500).json({
    success:false,
    message:"error in database",
    error:err.message
})
    }
}


const update=async(req,res)=>{
    try{
const {title,author,content}=req.body;
console.log(title,author,content);
const id=req.params.id;
console.log(id);
if(!id){
   return res.status(404).json({
        success:false,
        message:"id not found",
        
    })
}

const value=await post.findByIdAndUpdate(id,{content,author,title},{new:true});
console.log(value);


if(!value){
  return  res.status(404).json({
        success:false,
        message:"content not found",
        data:value
    })
}

res.status(200).json({
success:true,
message:"successfully uploaded",
data:value

})


    }catch(err){
res.status(500).json({
    success:false,
    message:"something went wrong",
    error:err.message
})
    }
}


const remove=async(req,res)=>{
    try{
        const id=req.params.id;

        const erase=await post.findByIdAndDelete(id);
        console.log(erase);

        if(!erase){
          return  res.status(404).json({
                success:false,
                message:"user not found",
                data:erase
            })
        }

        res.status(200).json({
            success:true,
            message:"successfully deleted",
            data:erase
        })

    }catch(err){
res.status(500).json({
    success:false,
    message:"something went wrong",
    error:err.message
})
    }
}

module.exports={create,update,remove,all,singleton};