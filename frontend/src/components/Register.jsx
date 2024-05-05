import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


function Register() {
    const [Username,setUsername]=useState("")
    const [Password,setPassword]=useState("")
    const [name,setName]=useState("")

    const navigate=useNavigate()

    const submit= async (e)=>{
      e.preventDefault();

      await axios({  //Login logic
        method: 'post',
        url: "/register",
        data: {
          email: Username,
          password: Password,
          name:name
        }
      }).then((res)=>{
        const {error} = res.data;
        if(error) toast.error(error);
        else{
        toast.success("Registered Successfully!");
        navigate("/login")
      }
        
      })
      .catch((err)=>{
        console.log(err)
      });
    }

  return (
      <form>
        <input id="name" type="text" placeholder="Name" onChange={(e)=>{setName(e.target.value)}}/>
        <input id="Username" type="text" placeholder="Email" onChange={(e)=>{setUsername(e.target.value)}}/>
        <input id="Password" type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
        <button onClick={submit}>Submit</button>
      </form>
  )
}

export default Register
