// importing packages
const express = require('express')
const app = express()
const morgan = require("morgan")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const session = require("express-session")

// middlewares 
require("dotenv").config()
app.use(cookieParser())

app.use(cors({origin:"http://localhost:5173",methods:['GET','POST','DELETE','PUT'],credentials:true}))
app.use(express.json())
app.use(morgan("common"))
app.use(session({
    secret:process.env.SESSION_SECRET,
    name:"wrapfile.sid",
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge:1000*60*60,
        httpOnly:true,
        secure:false
    }
}))


// routes
require("./utils/setup/db")()
require('./routes/index')(app);

app.use((err,req,res,next)=>{
    res.status(500).json({message:err.message,success:false})
})
            

app.listen(8000,()=>console.log("server started ..."))
