import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Product from '../side/Product';
import Left from './LeftSide/Left';
import { Link } from 'react-router-dom';

const Products = () => {
  const [filter, setFilter] = useState('all');
  const sendData = (data) => {
    setFilter(data);
    console.log(data);
  };
  const products = useSelector((state) => state.products);
  //sort by name
  let newProducts = products.sort((a, b) => b.name.localeCompare(a.name));
  //sort by price
  let productsPrices = products.sort((a, b) => b.price - a.price);
  return (
    <div>
      <div className='bg-store flex items-center justify-center mb-8 py-16'>
        <h3 className='w-4/6 text-3xl font-extrabold'>
          <Link
            to='/'
            className='text-price transition hover:text-gray-700 ease-in-out'
          >
            Home
          </Link>{' '}
          / Products
        </h3>
      </div>
      <div className='flex flex-col lg:flex-row mx-auto justify-center'>
        <Left sendData={sendData} />
        <div className='grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-4 gap-x-4 lg:w-1/2 w-full mt-3'>
          {products ? (
            productsPrices.map((product) => {
              return (
                <Link to={`/products/${product.id}`} exact>
                  <Product
                    name={product.name}
                    price={product.price}
                    img={product.image}
                  />
                </Link>
              );
            })
          ) : (
            <h1>Loading</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
