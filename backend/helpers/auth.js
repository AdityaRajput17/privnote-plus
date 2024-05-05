import bcrypt from "bcrypt";

const hashPassword=(password)=>{
    return new Promise((resolve,reject)=>{
        bcrypt.genSalt(12, function(err, salt) {
            if(err){
                reject(err)
            }
            bcrypt.hash(password, salt, function(err, hash) {
                if(err){
                    reject(err)
                }
                resolve(hash)
            });
        })
    }
)};
 

const comparePassword=async (password,hashedPassword)=>{
    const entry= await bcrypt.compare(password,hashedPassword)
    return entry;
}

export {hashPassword, comparePassword} 