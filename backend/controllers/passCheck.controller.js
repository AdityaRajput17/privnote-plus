import { comparePassword } from "../helpers/auth.js";
import { decrypt } from "../helpers/encrypt.js";
import { Note } from "../models/note.model.js";

export const passCheck=async(req,res)=>{
    const {id}=req.params;
    const note = await Note.findOne({id:id});
    const {password}=req.body;
    const decryptedNote=decrypt(note.note)

    if(await comparePassword(password,note.password))
        res.json({message:"correct",note:decryptedNote})
    else
    res.json({message:"incorrect"})
    
}