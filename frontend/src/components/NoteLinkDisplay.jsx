import React, { useState } from 'react';

const NoteLinkDisplay = ({ link }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(link)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => console.error('Could not copy text: ', err));
  };

  return (
    <div className="max-w-3xl w-full mx-auto p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-lg font-medium text-gray-700 mb-4">Link to open the note:</h2>
      <div className="flex space-x-2">
        <input
          className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          type="text"
          value={link}
          readOnly
          onFocus={(e) => e.target.select()}
        />
        <button
          onClick={handleCopy}
          className={`px-4 py-2 rounded-lg transition-colors ${
            copied
              ? 'bg-green-600 text-white'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  );
};

export default NoteLinkDisplay
