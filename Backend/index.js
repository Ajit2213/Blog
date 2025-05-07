const express=require("express");
const app=express();
const cors=require("cors");
const connectdb=require("./config/db");
const rasta=require("./routes/paths");
require("dotenv").config();

const port=process.env.PORT||8080;
app.use(express.json());
const corsOptions = {
    origin: 'http://localhost:5173', // allow only this frontend origin
    methods: ['GET', 'POST','PUT','DELETE'],        // allow only GET and POST
    credentials: true                // allow cookies
  };
  
  app.use(cors(corsOptions));
  




app.use("/app/v1",rasta);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})

connectdb();


