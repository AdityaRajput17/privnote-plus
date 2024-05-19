import React, { useState } from 'react';

const NoteLinkDisplay = ({ link }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(link)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset the copied state after 2 seconds
      })
      .catch(err => console.error('Could not copy text: ', err));
  };

  return (
    <div>
    <h1>Link to open the note:</h1>
      <input
        className='border px-4 py-2'
        type="text"
        value={link}
        readOnly
        onFocus={(e) => e.target.select()} // Select the text when input is focused
      />
      <button onClick={handleCopy}>
        {copied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  );
};


export default NoteLinkDisplay
