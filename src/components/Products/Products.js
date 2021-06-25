import React from 'react';
import { useSelector } from 'react-redux';
import Product from '../side/Product';
import Left from './LeftSide/Left';

const Products = () => {
  const products = useSelector((state) => state.products);
  console.log(products);
  //sort by name
  let newProducts = products.sort((a, b) => b.name.localeCompare(a.name));
  //sort by price
  let productsPrices = products.sort((a, b) => b.price - a.price);
  return (
    <div className='flex flex-col lg:flex-row mx-auto justify-center'>
      <Left />
      <div className='grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-4 gap-x-4 w-1/2'>
        {products ? (
          productsPrices.map((product) => {
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
    </div>
  );
};

export default Products;
