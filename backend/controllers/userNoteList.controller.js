import {User} from "../models/user.model.js"
import {Note} from "../models/note.model.js"

export const userNoteList=async(req,res)=>{
    const {email}=req.body;
    try {
        const user=await User.findOne({email:email});
        if(!user){
            return res.status(404).json({error:"User not found"});
        }

        // Fetch all notes using the stored IDs
        const notes = await Note.find({ id: { $in: user.notes } });
        res.status(200).json(notes);
    } catch (error) {
        console.log("Error fetching user notes:", error);
        res.status(500).json({error:"Error fetching notes"});
    }
}

