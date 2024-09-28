// expiry can be 1h 24h 7d 30d "after"

export const expiryConversion=(expiry)=>{

    let currentTime = new Date();
    let expiryTime= null;
    if(expiry==='1h'){
        expiryTime=currentTime.setHours(currentTime.getHours()+1);
    }
    else if(expiry==='24h'){
        expiryTime=currentTime.setHours(currentTime.getHours()+24);
    }
    else if(expiry==='7d'){
        expiryTime=currentTime.setDate(currentTime.getDate()+7);
    }
    else if(expiry==='30d'){
        expiryTime=currentTime.setDate(currentTime.getDate()+30);
    }
    else if(expiry==='after'){
        expiryTime=null;
    }
    
    

    return expiryTime;
}

