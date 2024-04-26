import { useState } from "react";
import axios from "axios";

const Login = () => {
    const [Username,setUsername]=useState("")
    const [Password,setPassword]=useState("")

    const submit= async (e)=>{
      e.preventDefault();

      await axios({  //Login logic
        method: 'post',
        url: "http://localhost:8000/api/login",
        data: {
          email: Username,
          password: Password
        }
      }).then((res)=>{
        console.log(res.data);
        if(res.data.password==="match"){
          console.log("login successful")
        }else if(res.data.password=="not match"){
          console.log("login unsuccessful")
        }
      }).catch((err)=>{
        console.log(err)
      });
    }

  return (
    <div>
      <form action="POST">
        <input id="Username" type="text" placeholder="Email" onChange={(e)=>{setUsername(e.target.value)}}/>
        <input id="Password" type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
        <input type="submit" onClick={submit}/>
      </form>
    </div>
  )
}

export default Login
