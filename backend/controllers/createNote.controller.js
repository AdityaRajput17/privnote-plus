import {User} from "../models/user.model.js"
import {Note} from "../models/note.model.js"
import ShortUniqueId from "short-unique-id"
import { hashPassword } from "../helpers/auth.js";
import { encrypt, decrypt } from "../helpers/encrypt.js";
import {expiryConversion} from "../helpers/expiryConversion.js"
export const createNote= async (req,res)=>{
    const {noteData, email} = req.body;
    const uid= new ShortUniqueId();
    const id=uid.rnd();

    const encryptedNote= await encrypt(noteData.note)

    let hashedPassword="";
    if(noteData.optionData.password){
        hashedPassword=await hashPassword(noteData.optionData.password);
    }
    
    let expiryOfNote = expiryConversion(noteData.optionData.expiry);
    const note=new Note(
    {
        id:id,
        note:encryptedNote,
        password:hashedPassword,
        expiry:expiryOfNote,
        DontWarn:noteData.optionData.DontWarn,
        isViewed: ( expiryOfNote===null ? true : false )
    })

    note.save()

    if(email)
    {
        try {     

            await  User.updateOne({email:email},{$push: { notes: note } })
            res.status(200).send(id);

        } catch (error) {
            console.log("Error while creating a note",error)
        }
    }
    else{
        //create note when not login-ed
        try {
        
            await  User.updateOne({email:"ADMIN"},{$push: { notes: note } })
            res.status(200).send(id);

        } catch (error) {
            console.log("Error while creating a note",error)
        }
    }
}