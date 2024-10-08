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
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Viewpage from './pages/Viewpage.jsx'
import Displaypage from './pages/Displaypage.jsx'
import Layout from './components/Layout.jsx'

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true

const router=createBrowserRouter([
  {
    element: <Layout/>,
    children:[
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
      {
        path:"/view",
        element:<><Navbar/><Viewpage/></>
      },
      {
        path:"/view/:id",
        element:<><Navbar/><Displaypage/></>
      },
    ]
  }
  
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <UserContextProvider>
    <RouterProvider router={router}/>
  </UserContextProvider>
  <ToastContainer
    position="bottom-right"
    autoClose={2500}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    transition: Bounce/>
  </React.StrictMode>,
)
