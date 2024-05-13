import mongoose from "mongoose";

//TODO: instead of storing the whole notes in user we can just save the note ids.

const userSchema=new mongoose.Schema({
    name:{
        type: String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    notes:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Note"
    }]
},
{
    timestamps: true 
});

export const User = mongoose.model("User", userSchema)