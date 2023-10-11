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

app.use(cors({origin:["http://localhost:5173","http://127.0.0.1:5500",process.env.FRONTEND_URL],methods:['GET','POST','DELETE','PUT'],credentials:true}))
app.use(express.json({limit:"50mb"}));
app.use(express.urlencoded({ limit:'50mb', extended:true}))


app.use(morgan("common"))
app.use(session({
    secret:process.env.SESSION_SECRET,
    name:"wrapfile.sid",
    resave:false,
    saveUninitialized:false,
    cookie:{
        secure:false,
        maxAge:1000*60*60,
        httpOnly:true,
        // samesite:"none"
    }
}))


// routes
require("./utils/setup/db")()
require('./routes/index')(app);

app.use((err,req,res,next)=>{
    res.status(500).json({message:err.message,success:false})
})
            

app.listen(8000,()=>console.log("server started ...."))
