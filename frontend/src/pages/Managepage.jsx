import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/userContext';

const Managepage = () => {

    //display list of notes with its id, date of creation, view the note, delete the note.
    //data from backend : [{ id:123, doc:date  }]
    let {user}=useContext(UserContext);
    let [isLogin,setIsLogin]=useState(false);

    useEffect(() => {

        if(user){
            setIsLogin(true);
        }

        const fetchNotes = async () => {
            try {
                const response = await axios.post("/manage",{user});
                console.log(response.data)
                
            } catch (error) {
                console.error("Error fetching notes:", error);
            }
        };

        fetchNotes();
    }, []);

    //TODO: map the noteData in a note display component with 2 buttons view and delete

  return (
    <>
        {
            isLogin?<div>logined</div>:<div>not logined</div>
        }        
    </>
    
  )
}

export default Managepage
