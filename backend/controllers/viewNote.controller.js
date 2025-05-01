import { decrypt } from "../helpers/encrypt.js";
import { Note } from "../models/note.model.js";

export const viewNote=async(req,res)=>{
    try {
        const id=req.params.id;
        const note=await Note.findOne({id:id})
        if(!note){
            return res.status(404).json({error: "No Note"});
        }
        
        let passwordProtected=false;
        if(note.password!==""){
            passwordProtected={protect:true};
        }
        else{
            const decryptedNote=decrypt(note.note);
            passwordProtected={protect:false,note:decryptedNote}
        }
        
        if(note.DontWarn===false){
            return res.status(200).json({warn:"true",id:id,passwordProtected,expiry:note.expiry})
        } 
        else{
            return res.status(200).json({warn:"false",id:id,passwordProtected,expiry:note.expiry})
        }
    } catch (error) {
        console.error("Error viewing note:", error);
        return res.status(500).json({error: "Internal server error"});
    }
}