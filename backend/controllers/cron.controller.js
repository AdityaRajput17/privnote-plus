import { destructionCheck } from "../helpers/destructionCheck.js";

export const cron = async (req, res) => {
    console.log("cron job executed successfully");
    await destructionCheck();// calling the destructionCheck function to delete the notes that have expired
    res.status(200);
    res.json({"message":"Cron job executed successfully"});
}
