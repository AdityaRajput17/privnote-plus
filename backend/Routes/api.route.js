import { Router } from "express"
import { loginController } from "../controllers/login.controller.js"
import { logout }  from "../controllers/logout.controller.js"
import { registerController } from "../controllers/register.controller.js"
import { getProfile } from "../controllers/getProfile.controller.js"
import { createNote } from "../controllers/createNote.controller.js"
import cors from "cors"
import { viewNote } from "../controllers/viewNote.controller.js"
import { passCheck } from "../controllers/passCheck.controller.js"
import { deleteNote } from "../controllers/deleteNote.controller.js"
import { userNoteList } from "../controllers/userNoteList.controller.js"
import { cron } from "../controllers/cron.controller.js"
const api= Router()

api.use(cors({
    credentials:true,
    origin: 'http://localhost:5173'
}))

api.post("/register",registerController)
api.post("/login", loginController)
api.get("/profile", getProfile)
api.get("/logout",logout)
api.post("/note",createNote);
api.get("/view/:id",viewNote);
api.post("/display/:id/pass",passCheck);
api.post("/manage",userNoteList);
api.get("/cron",cron);
api.delete("/delete/:id",deleteNote);

export default api