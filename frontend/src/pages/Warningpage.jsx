import React from 'react';

const WarningPage = ({ onContinue , expiry }) => {

    const handleClick=()=>{
        onContinue(false);
    }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 text-white flex flex-col justify-center items-center z-50">
      <h1 className="text-4xl font-bold mb-4">Warning</h1>

      {expiry==="after" && <>
      <h1 className="text-lg mb-6">Read and Destroy the note?</h1>
      <p className="text-md mb-6">The note will be destroyed after you read it.</p></>}

      {expiry!=="after" && 
      <p className="text-lg mb-6">The note will be destroyed soon</p>}
      




      <button
        className="mt-4 px-6 py-2 text-lg font-semibold bg-gray-800 hover:bg-gray-700 rounded cursor-pointer"
        onClick={handleClick}
      >
        Continue
      </button>
    </div>
  );
};

export default WarningPage;