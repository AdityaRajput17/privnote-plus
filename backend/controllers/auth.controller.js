import { User } from "../models/user.model.js"
import { hashPassword, comparePassword } from "../helpers/auth.js";
import jwt from "jsonwebtoken";

const loginController= async (req,res)=>{
    const {email,password}=req.body;

    await User.findOne({email})
    .then((user)=>{ // User Exists Check
        if(user){
            
            //Password Check
            if(comparePassword(password,user.password))
            {
                jwt.sign({name: user.name,email: user.email,id:user._id},process.env.JWT_SECRET,{}
                    ,(err,token)=>{
                    if(err) console.log("error at jwt signing");
                    res.cookie("token",token).json(user);
                })
            }
            else
            {
                res.status(401).json({error:"Wrong credentials !"});
            }
        }
        else{
            res.status(404).send("User not found")
        }
    })
    .catch((err)=>{
        console.log("Error retrieving the user", err)
    })
}

const registerController = async (req,res)=>{

    const {name, email, password}= req.body
    if(!name || !email || !password)       // all three compulsory fields
    return res.status(404).json({error:"Fields missing"})

    if(password.length < 8){
        res.status(411).json({error: "Password must be of 8 characters"})
    }

    let userExist=true;

    await User.findOne({email})
    .then((user)=>{
        if(user)
    {
        userExist=true;
    }
    else{
       userExist=false;
    }
    })
    .catch((err)=>{console.log("error:",err)})

         //encrypting password
        if(!userExist)
        {
            
             const hashedPassword= await hashPassword(password)
             .catch((err)=>{
                console.log("error while hashing :",err)
             })

            const user=new User({       // creating a new user
                name:name,
                email:email,
                password: hashedPassword,
            })       
            await user.save()
            res.status(201).json({success: "User created successfully"})
        }
        else{
            res.json({error:"User already registered!"})
        }
}

const getProfile=(req,res)=>{
    const token=req.cookies.token
    console.log(token)
    if(token)
    {
        jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
            if(err) console.log("problem verifying token")
            res.json(user);
        })
    }
   if(!token){
        res.json({message:"token is not present"})
    }
}


export {loginController, registerController, getProfile}