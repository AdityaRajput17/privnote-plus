import mongoose from "mongoose";

//TODO: create another field as id which is a String instead of the mongoose id.

const noteSchema= new mongoose.Schema({
    title:{
        type: String,
    },
    content:{
        type: String,
        required:true,
    },
    password:{
        type: String,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }
},
{
    timestamps:true
})

export const Note= mongoose.model("Note", noteSchema)