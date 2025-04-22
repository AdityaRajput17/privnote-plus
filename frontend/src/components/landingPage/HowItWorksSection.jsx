import React from 'react'

const HowItWorksSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold text-blue-600">1</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Create</h3>
          <p className="text-gray-600">Write your note and set expiration time</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold text-blue-600">2</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Share</h3>
          <p className="text-gray-600">Share the unique link with your recipient</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold text-blue-600">3</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure</h3>
          <p className="text-gray-600">Note self-destructs after reading or time expires</p>
        </div>
      </div>
    </div>
  )
}

export default HowItWorksSection 