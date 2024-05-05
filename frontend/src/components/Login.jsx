import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";
import { toast } from "react-toastify";

const Login = () => {

    const {user,setUser}=useContext(UserContext)

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
      }).then(async (res)=>{
        console.log(res)
        if(res.data.message==="login success")
        {
          setUser(res.data.user);
          toast.success(`Welcome ${res.data.user.name}`);
          navigate("/home");
          
        }
        else if (res.data.error==="Wrong credentials")
          {
            toast.error("Wrong credentials")
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
