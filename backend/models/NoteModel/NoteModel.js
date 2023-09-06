const mongoose = require("mongoose");


const NoteSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    text:{
        type:String,
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




module.exports = mongoose.model("Note",NoteSchema)
