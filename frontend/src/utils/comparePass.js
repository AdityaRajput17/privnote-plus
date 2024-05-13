
export const comparePass=(password, confirmPassword)=>{
    if(password===confirmPassword)
        return true;
    
    return false;
}