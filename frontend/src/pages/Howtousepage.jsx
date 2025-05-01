import React from 'react'
import { Link } from 'react-router-dom'

function Howtousepage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How to Use PrivNotes
          </h1>
          <p className="text-lg text-gray-600">
            A secure way to share sensitive information that self-destructs after reading
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Creating a Note */}
          <section className="bg-white rounded-lg shadow-sm p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Creating a Note</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Write Your Note</h3>
                  <p className="mt-1 text-gray-600">
                    Enter your sensitive information in the text area. This could be passwords, 
                    confidential messages, or any other private data you want to share securely.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Set Security Options</h3>
                  <p className="mt-1 text-gray-600">
                    Choose how you want to protect your note:
                  </p>
                  <ul className="mt-2 space-y-2 text-gray-600 list-disc list-inside">
                    <li>Add a password for extra security</li>
                    <li>Set when the note should self-destruct (after reading, 1 hour, 24 hours, etc.)</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Create the Note</h3>
                  <p className="mt-1 text-gray-600">
                    Click the "Create Note" button to generate a secure link to your note.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Sharing a Note */}
          <section className="bg-white rounded-lg shadow-sm p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sharing a Note</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Copy the Link</h3>
                  <p className="mt-1 text-gray-600">
                    After creating your note, you'll receive a unique link. Copy this link to share with your recipient.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Share Securely</h3>
                  <p className="mt-1 text-gray-600">
                    Share the link through a secure channel. If you set a password, share it separately from the link.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Reading a Note */}
          <section className="bg-white rounded-lg shadow-sm p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Reading a Note</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-semibold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Access the Note</h3>
                  <p className="mt-1 text-gray-600">
                    Click on the shared link to access the note. If it's password protected, enter the password.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-semibold">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">View the Content</h3>
                  <p className="mt-1 text-gray-600">
                    The note will be displayed. Remember that the note will be destroyed after reading or after the set time period.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Security Features */}
          <section className="bg-white rounded-lg shadow-sm p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Security Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Note Encryption</h3>
                <p className="text-gray-600">
                  All notes are encrypted before being stored, ensuring your data remains secure.
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Self-Destruction</h3>
                <p className="text-gray-600">
                  Notes are automatically deleted after being read or after the set time period expires.
                </p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Password Protection</h3>
                <p className="text-gray-600">
                  Add an extra layer of security with password protection for your notes.
                </p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-2">No Storage</h3>
                <p className="text-gray-600">
                  Notes are not stored permanently and are completely removed after viewing.
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <div className="text-center">
            <Link 
              to="/home"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Create Your First Note
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Howtousepage
