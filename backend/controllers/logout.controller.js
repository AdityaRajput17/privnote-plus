
    export const logout=(req,res)=>{
    try {
        res.clearCookie("token").json({message:"Logout success"})
    } catch (error) {
        console.log("Error while logging out:", error)
    }
}