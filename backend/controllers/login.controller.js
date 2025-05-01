import { User } from "../models/user.model.js"
import { comparePassword } from "../helpers/auth.js";
import jwt from "jsonwebtoken";

export const loginController= async (req,res)=>{
    const {email,password}=req.body;

    await User.findOne({email})
    .then(async(user)=>{ // User Exists Check
        if(user){
            
            //Password Check
            const isCorrectPassword= await comparePassword(password,user.password)
            if(isCorrectPassword)
            {
                jwt.sign({name: user.name,email: user.email,id:user._id},process.env.JWT_SECRET,{}
                    ,(err,token)=>{
                    if(err) console.log("error at jwt signing");
                    res.cookie("token",token).status(200).json({message:"login success",user: user});
                })
            }
            else
            {
                res.status(400).json({error:"Wrong credentials"});
            }
        }
        else{
            res.status(400).json({error:"Wrong credentials"});
        }
    })
    .catch((err)=>{
        console.log("Error retrieving the user", err)
    })
}