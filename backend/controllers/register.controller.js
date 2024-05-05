import { User } from "../models/user.model.js"
import { hashPassword } from "../helpers/auth.js"

export const registerController = async (req,res)=>{

    const {name, email, password}= req.body
    if(!name || !email || !password)       // all three compulsory fields
    return res.json({error:"Fields missing"})

    if(password.length < 8){
        res.json({error: "Password must be of 8 characters"});
        return
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