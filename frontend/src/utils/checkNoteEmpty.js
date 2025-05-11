import { toast } from "react-toastify";

const checkNoteEmpty=(note)=>{
    if(note.trim==='')
        return true;
        
}

export default checkNoteEmpty;