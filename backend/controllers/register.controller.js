import { User } from "../models/user.model.js"
import { hashPassword } from "../helpers/auth.js"

export const registerController = async (req,res)=>{
    const {name, email, password, confirmPassword}= req.body
    
    // Validate required fields
    if(!name || !email || !password || !confirmPassword) {
        return res.status(400).json({error:"All fields are required"})
    }

    // Validate password length
    if(password.length < 8){
        return res.status(400).json({error: "Password must be at least 8 characters long"});
    }

    // Validate password match
    if(password !== confirmPassword) {
        return res.status(400).json({error: "Passwords do not match"});
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)) {
        return res.status(400).json({error: "Invalid email format"});
    }

    try {
        // Check if email already exists
        const existingUser = await User.findOne({email});
        if(existingUser) {
            return res.status(400).json({error:"Email already registered"});
        }

        // Hash password and create new user
        const hashedPassword = await hashPassword(password);
        const user = new User({
            name,
            email,
            password: hashedPassword,
        });
        
        await user.save();
        return res.status(201).json({success: "User created successfully"});
    } catch (error) {
        console.error("Error during registration:", error);
        return res.status(500).json({error: "Error creating user"});
    }
}