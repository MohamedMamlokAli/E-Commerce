import React from 'react';

const Button = ({ name, width }) => {
  return (
    <button
      className={`px-4 py-2 text-sm bg-yellow-700 w-${width} text-gray-300 tracking-wide rounded-lg hover:bg-gray-300 hover:text-yellow-700 ease-in transition`}
    >
      {name}
    </button>
  );
};

export default Button;
