import React from 'react'
import { Link } from 'react-router-dom'

const LoginToView = () => {
  return (
    <div>
      <div className="min-h-[60vh] flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-white border border-gray-200 rounded-xl shadow-sm p-8 text-center">
                <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center">
                    {/* lock icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-blue-600">
                        <path fillRule="evenodd" d="M12 1.5a4.5 4.5 0 00-4.5 4.5v3a3 3 0 00-3 3V18a3 3 0 003 3h9a3 3 0 003-3v-6a3 3 0 00-3-3V6A4.5 4.5 0 0012 1.5zm3 7.5V6a3 3 0 10-6 0v3h6z" clipRule="evenodd" />
                    </svg>
                </div>
                <h2 className="text-xl font-semibold text-gray-900">Please login to view notes</h2>
                <p className="mt-2 text-gray-600">Sign in to view and manage your private notes.</p>
                <div className="mt-6">
                    <Link to="/login" className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                        Go to Login
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginToView
