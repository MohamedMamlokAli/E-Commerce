import './App.css';
import Navbar from './components/Header/Navbar';
import Hero from './components/Hero Section/Hero';
import Featured from './components/Featured/Featured';
import Moto from './components/Moto/Moto';
import NewsLetter from './components/Newsletter/NewsLetter';
import Footer from './components/Footer/Footer';

import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const url = 'https://course-api.com/react-store-products';
function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  console.log(products);
  useEffect(() => {
    axios
      .get(url)
      .then((results) => dispatch({ type: 'FETCHED', payload: results.data }));
  }, []);
  return (
    <div className='app'>
      <Navbar />
      <Hero />
      <Featured />
      <Moto />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
// // export const products_url = 'https://course-api.com/react-store-products'

// export const single_product_url = `https://course-api.com/react-store-single-product?id=`
