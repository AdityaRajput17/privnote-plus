// import cron from 'node-cron';
import {Note} from "../models/note.model.js";

// export const destructionCheck= cron.schedule('* * * * *', async()=>{
//     
//     try{
// 
//         await Note.deleteMany({expiry:{$lte:new Date()}});
//         
//     }
//     catch(err)
//     {
//         console.log("e:Error during cron job :", err);
//     }
// });

export const destructionCheck = async () => {
    try {
        await Note.deleteMany({expiry:{$lte:new Date()}});
    }
    catch(err) {
        console.log("e:Error during cron job :", err);
    }
};
