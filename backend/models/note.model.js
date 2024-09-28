import mongoose from "mongoose"

const noteSchema= new mongoose.Schema({
    id:{
        type: String,
        required:true,
    },
    note:{
        type: String,
        required:true
    },
    password:{
        type: String,
    },
    expiry:{
        type: Date,
        
    },
    DontWarn:{
        type: Boolean,
        required:true,
    },
    isViewed:{
        type: Boolean,
        required:true,

    },
    // user:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "User",
    //     required: true,
    // }
},
{
    timestamps:true
})

export const Note= mongoose.model("Note", noteSchema)