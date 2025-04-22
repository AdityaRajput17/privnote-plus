import {Outlet} from "react-router-dom"
import {ErrorBoundary} from 'react-error-boundary'
import Navbar from "./Navbar"
// import ErrorPage from "../pages/ErrorPage"

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        {/* <ErrorBoundary FallbackComponent={ErrorPage}> */}
          <Outlet/>
        {/* </ErrorBoundary> */}
      </main>
    </div>
  )
}

export default Layout
