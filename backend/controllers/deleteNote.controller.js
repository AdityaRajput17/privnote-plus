import { Note } from "../models/note.model.js";

export const deleteNote=async (req,res)=>{
    const id=req.params.id;
    await Note.deleteOne({id:id});
    res.json("deleted Note");
}