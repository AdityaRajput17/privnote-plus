import {Router} from "express"
import { User } from "../models/user.model.js"
const api= Router()

api.post("/register",async (req,res)=>{
    //TODO: add validations if user already registered
    const {name, email, password}= req.body
    if(!name || !email || !password)       // all three compulsory fields
    return res.status(422).json({error:"Fields missing"})

    const user=new User(req.body)       // creating a new user
    await user.save()
    res.status(500).send("User created successfully")

})

api.post("/login",async (req,res)=>{
    const {email,password}=req.body;
    await User.findOne({email})
    .then((user)=>{ // User Exists Check
        if(user){
            // res.json({"message":"user is present","User": user})
            //Password Check
            if(password==user.password)
            res.status(200).json({"password":"match"})
            else
            res.status(200).json({"password":"not match"})
        }
        else{
            res.status(404).send("User not found")
        }
    })
    .catch((err)=>{
        console.log("Error retrieving the user", err)
    })

})

export default api