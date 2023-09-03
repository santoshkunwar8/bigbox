const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    about:{
        type:String,
    },
    country:{
        type:String,
    },
    password:{
        type:String,
    },
    image:{
        type:String,
    }
},{timestamps:true})



module.exports =mongoose.model("User",UserSchema)
