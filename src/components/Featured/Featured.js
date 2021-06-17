import React from 'react';
import { useSelector } from 'react-redux';
import Button from '../side/Button';
import Product from '../side/Product';

const Featured = () => {
  const products = useSelector((state) => state.products);
  products.length = 3;
  return (
    <section
      id='featured'
      className='bg-gray-200 flex flex-col p-10 items-center gap-10 '
    >
      <h1 className='text-center text-gray-700 text-3xl lg:text-4xl  font-bold'>
        Featured products
      </h1>
      <div
        id='products'
        className='flex  lg:flex-row lg:justify-center justify-between flex-wrap  gap-10 items-center'
      >
        {products ? (
          products.map((product) => {
            return (
              <Product
                name={product.name}
                price={product.price}
                img={product.image}
              />
            );
          })
        ) : (
          <h1>Loading</h1>
        )}
      </div>
      <Button name='ALL PRODUCTS' />
    </section>
  );
};

export default Featured;
