const express=require("express");
const router=express.Router();

// const{show,update,remove,create}=require("../controllers");
const {create,update,remove,all,singleton}=require("../controllers/data");

// router.get("/all",(req,res)=>{
//     res.send("its working");
// })

// router.get("/show",show);
router.get("/all",all);
router.get("/singleton/:id",singleton)
router.delete("/delete/:id",remove);
router.put("/update/:id",update);
router.post("/create",create);




module.exports=router;