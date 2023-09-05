const express = require('express')
const app = express()
const morgan = require("morgan")
require("dotenv").config()



app.use(express.json())
app.use(morgan("common"))
require("./utils/setup/db")()
require('./routes/index')(app);

            

app.listen(8000,()=>console.log("server started ..."))
