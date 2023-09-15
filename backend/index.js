// importing packages
const express = require('express')
const app = express()
const morgan = require("morgan")
const cors = require("cors")

// middlewares 
require("dotenv").config()
app.use(cors({origin:"http://localhost:5173",methods:['GET','POST','DELETE','PUT'],credentials:true}))
app.use(express.json())
app.use(morgan("common"))


// routes
require("./utils/setup/db")()
require('./routes/index')(app);


app.use((err,req,res,next)=>{
    res.status(500).json({message:err.message,success:false})
})
            

app.listen(8000,()=>console.log("server started ..."))
