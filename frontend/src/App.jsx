import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from "react-router-dom"
import Layout from "./components/Layout"
import Homepage from "./pages/Homepage"
import Registerpage from "./pages/Registerpage"
import Loginpage from "./pages/Loginpage"

//Routes
const router=createBrowserRouter(createRoutesFromElements(
  //Routes for "/"
  <Route path="/" element=<Layout/>>
    <Route path="/" element=<Homepage/>/>
    <Route path="login" element=<Loginpage/>/>
    <Route path="register" element=<Registerpage/>/>
    
  </Route>
))


const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
