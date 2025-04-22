import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Share Notes Securely with{' '}
          <span className="text-blue-600">PrivNotes</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Create encrypted, self-destructing notes that disappear after reading or at a set time. Perfect for sharing sensitive information securely.
        </p>
        <div className="flex justify-center space-x-4">
          <Link 
            to="/home" 
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Create Note
          </Link>
          <Link 
            to="/view" 
            className="px-8 py-3 bg-white text-gray-700 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            View Note
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroSection 