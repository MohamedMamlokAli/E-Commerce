import React, { useState } from 'react';

const Left = () => {
  const [price, setPrice] = useState(3099);
  return (
    <div id='left__side'>
      <input type='text' name='' id='' />
      <h3>Catagory</h3>
      <ul>
        <li>All</li>
        <li>Office</li>
        <li>Living Room</li>
        <li>Kitchen</li>
        <li>Bedroom</li>
        <li>Dining</li>
        <li>Kids</li>
      </ul>
      <h3>Company</h3>
      <select name='company' id='companies'>
        <option value='all'>all</option>
        <option value='marcos'>marcos</option>
        <option value='liddy'>liddy</option>
        <option value='ikea'>ikea</option>
        <option value='caressa'>caressa</option>
      </select>
      <h3>Price</h3>
      <input
        type='range'
        id='points'
        name='points'
        min='0'
        max='3099'
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <p>{price}</p>
    </div>
  );
};

export default Left;
