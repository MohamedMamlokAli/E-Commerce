import React from 'react';

const Button = ({ name, width, color, dispatch }) => {
  return (
    <button
      className={`px-4 py-2 text-sm ${
        color ? color : 'bg-price'
      }  w-${width} text-gray-300 tracking-wide rounded-lg hover:bg-gray-300 hover:text-yellow-700 ease-in transition`}
      onClick={dispatch}
    >
      {name}
    </button>
  );
};

export default Button;
