import React, { useState } from 'react';
import { priceChanger } from '../../side/functions';

const Left = ({
  sendcompany,
  sendSearch,
  sendPriceData,
  sendCategory,
  reset,
}) => {
  const [price, setPrice] = useState(310000);
  return (
    <div id='left__side' className=' ml-3'>
      <input
        type='text'
        name=''
        placeholder='search...'
        className='bg-gray-200 p-1 pl-3 w-4/5 rounded-md'
        onChange={(e) => sendSearch(e.target.value)}
        id=''
      />
      <h3 className='my-3 font-bold text-gray-800'>Category</h3>
      <ul className='space-y-1'>
        <li
          className='cursor-pointer text-gray-500'
          onClick={(e) => sendCategory(e.target.innerText)}
        >
          all
        </li>
        <li
          className='cursor-pointer text-gray-500'
          onClick={(e) => sendCategory(e.target.innerText)}
        >
          office
        </li>
        <li
          className='cursor-pointer text-gray-500'
          onClick={(e) => sendCategory(e.target.innerText)}
        >
          living room
        </li>
        <li
          className='cursor-pointer text-gray-500'
          onClick={(e) => sendCategory(e.target.innerText)}
        >
          kitchen
        </li>
        <li
          className='cursor-pointer text-gray-500'
          onClick={(e) => sendCategory(e.target.innerText)}
        >
          bedroom
        </li>
        <li
          className='cursor-pointer text-gray-500'
          onClick={(e) => sendCategory(e.target.innerText)}
        >
          dining
        </li>
        <li
          className='cursor-pointer text-gray-500'
          onClick={(e) => sendCategory(e.target.innerText)}
        >
          kids
        </li>
      </ul>
      <h3 className='my-3 font-bold text-gray-800'>Company</h3>
      <select
        name='company'
        id='companies'
        className='bg-gray-200 p-1'
        onChange={(e) => sendcompany(e.target.value)}
      >
        <option value='all'>all</option>
        <option value='marcos'>marcos</option>
        <option value='liddy'>liddy</option>
        <option value='ikea'>ikea</option>
        <option value='caressa'>caressa</option>
      </select>
      <h3 className='my-3 font-bold text-gray-800'>Price</h3>
      <input
        type='range'
        id='points'
        name='points'
        min='3099'
        max='310000'
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
          sendPriceData(price);
        }}
      />
      <p className='my-3'>{priceChanger(price)}</p>

      <button
        className=' w-28 bg-red-700  py-2 text-sm text-gray-300 tracking-wide rounded-lg hover:bg-gray-300 hover:text-yellow-700 ease-in transition'
        onClick={() => reset()}
      >
        Clear Filters
      </button>
    </div>
  );
};

export default Left;
