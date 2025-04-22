import jwt from "jsonwebtoken";

export const getProfile=(req,res)=>{
    const token=req.cookies.token
    if(token)
    {
        jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
            if(err) console.log("problem verifying token")
            res.json(user);
        })
    }
   if(!token){
        
        res.status(404)
    }
}