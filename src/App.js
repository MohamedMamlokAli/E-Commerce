import './App.css';
import Home from './components/HomePage/Home';
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Products from './components/Products/Products';
import axios from 'axios';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import SingleProduct from './components/SingleProduct/SingleProduct';
import CartPage from './components/Cart/CartPage';
import Login from './components/Login/Login';
import { auth } from './firebase';
const url = 'https://course-api.com/react-store-products';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(url)
      .then((results) => dispatch({ type: 'FETCHED', payload: results.data }));
  }, [dispatch]);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch({ type: 'SET_USER', payload: { user: user.email } });
      } else {
        dispatch({ type: 'SET_USER', payload: { user: null } });
      }
    });
  }, [dispatch]);
  return (
    <div className='app'>
      <Router>
        <Navbar />

        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/products' exact component={Products} />
        <Route path='/cart' component={CartPage} />
        <Route path='/login' component={Login} />

        <Route path='/products/:id' component={SingleProduct} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
// // export const products_url = 'https://course-api.com/react-store-products'

// export const single_product_url = `https://course-api.com/react-store-single-product?id=`
