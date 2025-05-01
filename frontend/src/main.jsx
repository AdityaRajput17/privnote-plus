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
import Managepage from './pages/Managepage.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import { ErrorBoundary } from 'react-error-boundary'
import Howtousepage from './pages/Howtousepage.jsx'

axios.defaults.baseURL = process.env.BACKEND_URL;
axios.defaults.withCredentials = true

const router=createBrowserRouter([
  {
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<><Landing/></>
      },
      {
        path:"/login",
        element:<><Loginpage/></>
      },
      {
        path:"/signup",
        element:<><Registerpage/></>
      },
      {
        path:"/home",
        element:<><Homepage/></>
      },
      {
        path:"/view",
        element:<><Viewpage/></>
      },
      {
        path:"/view/:id",
        element:<><Displaypage/></>
      },
      {
        path:"/manage",
        element:<><Managepage/></>
      },
      {
        path:"/howtouse",
        element:<><Howtousepage/></>
      },
      {
        path:"*",
        element:<ErrorPage/>
      },
    ]
  }
  
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ErrorBoundary fallback={ErrorPage}>
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
    </ErrorBoundary>
  </React.StrictMode>,
)
