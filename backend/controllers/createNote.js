import {User} from "../models/user.model.js"

export const createNote= async (req,res)=>{
    const {noteData, email} = req.body;
    if(email)
    {
        const user= await User.findOne({email})
         
    }
    else{
        //TODO: create note with no user
    }
}