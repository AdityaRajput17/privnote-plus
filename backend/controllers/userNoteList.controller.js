import { getDocuments } from "../helpers/getDocuments.js";
import { User } from "../models/user.model.js";

 export const userNoteList= async (req,res)=>{
    
   let {user}=req.body;
   if(user)
   {
   let {email,id}=user;
   
   const userFound= await User.findOne({email:email});
   const {notes}=userFound;
   let documents= await getDocuments(notes);

   //removing unwanted details
   documents= documents.map(({ _id, createdAt }) => ({
    _id,
    createdAt,
    }));

   res.json(documents);
    }
 }

