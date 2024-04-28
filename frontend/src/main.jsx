import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from './pages/Landing.jsx'
import Loginpage from './pages/Loginpage.jsx'
import Registerpage from './pages/Registerpage.jsx'
import Homepage from './pages/Homepage.jsx'
import Navbar from './components/Navbar.jsx'
import axios from 'axios'
import { UserContextProvider } from './context/userContext.jsx'


axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true

const router=createBrowserRouter([
  {
    path:"/",
    element:<><Navbar/><Landing/></>
  },
  {
    path:"/login",
    element:<><Navbar/><Loginpage/></>
  },
  {
    path:"/signup",
    element:<><Navbar/><Registerpage/></>
  },
  {
    path:"/home",
    element:<><Navbar/><Homepage/></>
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <UserContextProvider>
    <RouterProvider router={router}/>
  </UserContextProvider>
  </React.StrictMode>,
)
