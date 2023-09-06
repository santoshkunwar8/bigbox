const mongoose = require("mongoose")
const FileSchema = mongoose.Schema({
    type:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    url:{
        type:String,
        required:true
    },
    size:{
        type:Number,
        required:true,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    room:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Room"
    }

},{timestamps:true});




module.exports = mongoose.model("File",FileSchema)
