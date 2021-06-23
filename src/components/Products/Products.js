import React from 'react';
import { useSelector } from 'react-redux';
import Product from '../side/Product';

const Products = () => {
  const products = useSelector((state) => state.products);
  //sort by name
  let newProducts = products.sort((a, b) => b.name.localeCompare(a.name));
  //sort by price
  let productsPrices = products.sort((a, b) => b.price - a.price);
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-x-4 w-1/2'>
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
  );
};

export default Products;
