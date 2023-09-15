
const mongoose = require("mongoose")
const RoomSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    isPublic:{
        type:Boolean,
        default:false,
    },
    collaborators:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        }
    ]
},{timestamps:true});




module.exports = mongoose.model("Room",RoomSchema);


