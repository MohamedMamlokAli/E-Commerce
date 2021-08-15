import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Product from '../side/Product';
import Left from './LeftSide/Left';
import { Link } from 'react-router-dom';

const Products = () => {
  const [company, setcompany] = useState('all');
  const [search, setSearch] = useState('');
  const [priceData, setPriceData] = useState(0);
  const [category, setCategory] = useState('all');
  const reset = () => {
    setCategory('all');
    setcompany('all');
    setPriceData(310000);
    setSearch('');
  };
  const sendCategory = (categoryData) => {
    setCategory(categoryData);
    console.log(categoryData);
  };
  const sendcompany = (companyData) => {
    setcompany(companyData);
    console.log(companyData);
  };
  const sendSearch = (searchData) => {
    setSearch(searchData);
    console.log(searchData);
  };
  const sendPriceData = (priceData) => {
    setPriceData(priceData);
    console.log(priceData);
  };
  const products = useSelector((state) => state.products);

  //sort by name
  // let newProducts = products.sort((a, b) => b.name.localeCompare(a.name));
  //sort by price
  let productsPrices = products
    .sort((a, b) => b.price - a.price)
    .filter((product) => product.name.includes(search))
    .filter((product) =>
      company === 'all' ? product : product.company === company
    )
    .filter((product) =>
      priceData === 0 ? product : product.price < priceData
    )
    .filter((product) =>
      category === 'all' ? product : product.category === category
    );
  document.title = 'Products';
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
        <Left
          sendcompany={sendcompany}
          sendSearch={sendSearch}
          sendPriceData={sendPriceData}
          sendCategory={sendCategory}
          reset={reset}
        />
        <div className='grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-4 gap-x-4 lg:w-1/2 w-full mt-3'>
          {products ? (
            productsPrices.map((product) => {
              return (
                <Link key={product.id} to={`/products/${product.id}`}>
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
