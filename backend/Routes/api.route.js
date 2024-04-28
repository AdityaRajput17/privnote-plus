import {Router} from "express"
import { registerController, loginController, getProfile } from "../controllers/auth.controller.js"
import cors from "cors"
const api= Router()

api.use(cors({
    credentials:true,
    origin: 'http://localhost:5173'
}))

api.post("/register",registerController)
api.post("/login", loginController)
api.get("/profile", getProfile)

export default api