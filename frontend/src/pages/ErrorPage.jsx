import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-start px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
      
        <div className="space-y-4">
          <h1 className="text-6xl sm:text-7xl font-bold text-gray-900">404</h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Page Not Found</h2>
          <p className="text-lg text-gray-600">
            The page you are looking for doesn't exist or has been moved.
          </p>
        </div>

        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/home"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Go to Homepage
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Go Back
          </button>
        </div>

        
        <div className="mt-8">
          <p className="text-sm text-gray-500">
            Need help? <Link to="/howtouse" className="text-blue-600 hover:text-blue-500 underline">How to use PrivNotes</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage
