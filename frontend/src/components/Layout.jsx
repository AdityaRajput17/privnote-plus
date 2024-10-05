import {Outlet} from "react-router-dom"
import {ErrorBoundary} from 'react-error-boundary'
import ErrorPage from "./ErrorPage"

const Layout = () => {
  return (
    <> 
      <ErrorBoundary FallbackComponent={ErrorPage}>
        <Outlet/>
      </ErrorBoundary>
    </>
  )
}

export default Layout
