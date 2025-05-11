import { toast } from "react-toastify";

const checkNoteEmpty=(note)=>{
    if(note.trim==='')
        return true;
    else return false;
        
}

export default checkNoteEmpty;