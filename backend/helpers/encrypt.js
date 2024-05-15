import Cryptr from "cryptr"
import dotenv from "dotenv"
dotenv.config()

const cryptr=new Cryptr(process.env.CRYPTR_SECRET);

export const encrypt= (content)=>{
    const encryptedString= cryptr.encrypt(content);
    return encryptedString;

}

export const decrypt=(content)=>{
    const decryptedString= cryptr.decrypt(content);
    return decryptedString;
}