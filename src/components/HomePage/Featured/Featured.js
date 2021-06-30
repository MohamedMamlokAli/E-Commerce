import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Button from '../../side/Button';
import Product from '../../side/Product';
import { Link } from 'react-router-dom';

const Featured = () => {
  const products = useSelector((state) => state.products);
  const [current, setCurrent] = useState([...products]);
  current.length = 3;
  useEffect(() => {
    if (products) {
      setCurrent([...products]);
    }
  }, [products]);

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
        //flex  lg:flex-row lg:justify-center justify-between flex-wrap  gap-10 items-center w-5/6
        className='grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-x-4 w-full lg:px-32'
      >
        {current ? (
          current.map((product) => {
            return (
              <Link to={`/products/${product.id}}`}>
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
      <Link to='/products'>
        <Button name='ALL PRODUCTS' />
      </Link>
    </section>
  );
};

export default Featured;
