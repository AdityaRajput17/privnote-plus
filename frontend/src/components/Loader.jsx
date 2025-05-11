import React from 'react';

const Loader = ({ color }) => {
  let loaderColor = color === 'white' ? '#FFFFFF' : '#4A90E2';

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        stroke={loaderColor}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ animation: 'spin 1s linear infinite' }}
      >
        <circle cx="20" cy="20" r="18" strokeOpacity="0.2" />
        <path d="M38 20a18 18 0 0 1-18 18" />
        <style>
          {`
            @keyframes spin {
              to {
                transform: rotate(360deg);
              }
            }
          `}
        </style>
      </svg>
    </div>
  );
}

export default Loader;
