import React from 'react'
import { Link } from 'react-router-dom'

const CTASection = () => {
  return (
    <div className="bg-blue-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Share Securely?</h2>
        <p className="text-xl text-blue-100 mb-8">Start using PrivNotes today to share sensitive information safely.</p>
        <Link 
          to="/home" 
          className="px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
        >
          Get Started
        </Link>
      </div>
    </div>
  )
}

export default CTASection 