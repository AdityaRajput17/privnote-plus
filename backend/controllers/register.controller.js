import { User } from "../models/user.model.js"
import { hashPassword } from "../helpers/auth.js"

export const registerController = async (req,res)=>{
    //TODO: Add more validations (Re-Enter password & Check if email exists or not)
    const {name, email, password}= req.body
    if(!name || !email || !password)       // all three compulsory fields
    return res.status(400).json({error:"Fields missing"})

    if(password.length < 8){
        return res.status(400).json({error: "Password must be of 8 characters"});
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
    .catch((err)=>{
        console.log("error:",err)
        return res.status(500).json({error: "Internal server error"})
    })

         //encrypting password
        if(!userExist)
        {
            
             const hashedPassword= await hashPassword(password)
             .catch((err)=>{
                console.log("error while hashing :",err)
                return res.status(500).json({error: "Error processing password"})
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
            res.status(409).json({error:"User already registered!"})
        }
}