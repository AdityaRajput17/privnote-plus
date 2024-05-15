import {User} from "../models/user.model.js"
import {Note} from "../models//note.model.js"
import ShortUniqueId from "short-unique-id"
import { hashPassword } from "../helpers/auth.js";
import { encrypt, decrypt } from "../helpers/encrypt.js";

export const createNote= async (req,res)=>{
    const {noteData, email} = req.body;
    const uid= new ShortUniqueId();
    const id=uid.rnd();

    const hashedPassword="";
    if(noteData.optionData.password){
        hashedPassword=await hashPassword(noteData.optionData.password);
    }
    
    const note=new Note(
    {
        id:id,
        note:noteData.note,
        password:hashedPassword,
        expiry:noteData.optionData.expiry,
        DontWarn:noteData.optionData.DontWarn,

    })
    note.save()

    if(email)
    {
        try {     

            await  User.updateOne({email:email},{$push: { notes: note } })
            res.status(200).send("Note created!");

        } catch (error) {
            console.log("Error while creating a note",error)
        }
    }
    else{
        //create note when not login-ed
        try {
        
            await  User.updateOne({email:"ADMIN"},{$push: { notes: note } })
            res.status(200).send("Note created!");

        } catch (error) {
            console.log("Error while creating a note",error)
        }
    }
}