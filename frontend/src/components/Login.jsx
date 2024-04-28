import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [Username,setUsername]=useState("")
    const [Password,setPassword]=useState("")

    const navigate=useNavigate();

    const submit= async (e)=>{
      e.preventDefault();

      await axios({  //Login logic
        method: 'post',
        url: "/login",
        data: {
          email: Username,
          password: Password
        }
      })
      .catch((err)=>{
        console.log(err)
      });
    }

  return (
    <div>
      <form>
        <input id="Username" type="text" placeholder="Email" onChange={(e)=>{setUsername(e.target.value)}}/>
        <input id="Password" type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
        <input type="submit" onClick={submit}/>
      </form>
    </div>
  )
}

export default Login
