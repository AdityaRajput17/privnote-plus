import { Router } from "express"
import { loginController } from "../controllers/login.controller.js"
import { logout }  from "../controllers/logout.controller.js"
import { registerController } from "../controllers/register.controller.js"
import { getProfile } from "../controllers/getProfile.controller.js"
import cors from "cors"
const api= Router()

api.use(cors({
    credentials:true,
    origin: 'http://localhost:5173'
}))

api.post("/register",registerController)
api.post("/login", loginController)
api.get("/profile", getProfile)
api.get("/logout",logout)

export default api