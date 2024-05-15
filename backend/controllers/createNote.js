import {User} from "../models/user.model.js"
import {Note} from "../models//note.model.js"
import ShortUniqueId from "short-unique-id"

export const createNote= async (req,res)=>{
    const {noteData, email} = req.body;
    const uid= new ShortUniqueId();

    if(email)
    {
        try {
            const id=uid.rnd();
            
            const note=new Note(
            {
                id:id,
                note:noteData.note,
                password:noteData.optionData.password,
                expiry:noteData.optionData.expiry,
                DontWarn:noteData.optionData.DontWarn,

            })
            note.save()
            
            await User.updateOne({email:email},{$push: { notes: note } })
            
        } catch (error) {
            throw error;
            console.log("Error while creating a note");
        }
    }
    else{
        //TODO: create note with no user
    }
}