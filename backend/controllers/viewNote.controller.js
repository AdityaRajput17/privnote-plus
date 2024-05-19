import { decrypt } from "../helpers/encrypt.js";
import { Note } from "../models/note.model.js";

export const viewNote=async(req,res)=>{
    const id=req.params.id;
    const note=await Note.findOne({id:id})
    if(!note){
        //TODO: handle in frontend if no note present
        res.send("No Note");
    }
    else{
        let passwordProtected=false;
        if(note.password!==""){
            passwordProtected={protect:true};
        }
        else{
            const decryptedNote=decrypt(note.note);
            passwordProtected={protect:false,note:decryptedNote}
        }
        if(note.DontWarn===false){
            res.json({warn:"true",id:id,passwordProtected,expiry:note.expiry})
        } 
        else{
            res.json({warn:"false",id:id,passwordProtected,expiry:note.expiry})
        }
    }
}