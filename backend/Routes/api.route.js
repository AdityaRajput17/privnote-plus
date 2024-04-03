import {Router} from "express"
import { User } from "../models/user.model.js"
const api= Router()

api.post("/user/register",async (req,res)=>{
    const {name, email, password}= req.body
    if(!name || !email || !password)
    return res.status(422).json({error:"Fields missing"})

    const user=new User(req.body)
    await user.save()
    res.status(500).send("User created successfully")

})

export default api