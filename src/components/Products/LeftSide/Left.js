import React, { useState } from 'react';
import Button from '../../side/Button';

const Left = ({ sendData }) => {
  const [price, setPrice] = useState(3099);
  return (
    <div id='left__side' className=' ml-3'>
      <input
        type='text'
        name=''
        placeholder='search...'
        className='bg-gray-200 p-1 pl-3 w-4/5 rounded-md'
        id=''
      />
      <h3 className='my-3 font-bold text-gray-800'>Catagory</h3>
      <ul className='space-y-1'>
        <li className='cursor-pointer text-gray-500'>All</li>
        <li className='cursor-pointer text-gray-500'>Office</li>
        <li className='cursor-pointer text-gray-500'>Living Room</li>
        <li className='cursor-pointer text-gray-500'>Kitchen</li>
        <li className='cursor-pointer text-gray-500'>Bedroom</li>
        <li className='cursor-pointer text-gray-500'>Dining</li>
        <li className='cursor-pointer text-gray-500'>Kids</li>
      </ul>
      <h3 className='my-3 font-bold text-gray-800'>Company</h3>
      <select
        name='company'
        id='companies'
        className='bg-gray-200 p-1'
        onChange={(e) => sendData(e.target.value)}
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
        min='30.99'
        max='3100'
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <p className='my-3'>{price}</p>
      <Button name='Clear Filters' width='w-1/2' color='bg-red-700' />
    </div>
  );
};

export default Left;
