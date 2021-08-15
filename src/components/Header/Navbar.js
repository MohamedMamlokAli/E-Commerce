import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import openMenu from '../images/icon-hamburger.svg';
import closeMenu from '../images/icon-close.svg';
import logo from '../images/logo.221f6b13.svg';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import { useSelector } from 'react-redux';
import { auth } from '../../firebase';
const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const [open, isOpen] = useState(false);
  const handleSignOut = () => {
    if (cart.user) {
      auth.signOut();
    }
  };
  return (
    <header id='page__header' className='max-w-7xl mx-auto mb-4'>
      <div
        id='container'
        className='w-full flex items-center justify-between px-3 py-3'
      >
        <Link to='/'>
          <img id='logo__image' className='w-44' src={logo} alt='ComfySloth' />
        </Link>
        <img
          onClick={() => isOpen(!open)}
          id='open__close__menu'
          src={!open ? openMenu : closeMenu}
          alt='Open or close menu'
          className='lg:hidden'
        />
        <div
          id='desktop__nav'
          className='hidden lg:flex justify-between mr-8 flex-row w-3/6'
        >
          <nav id=''>
            <ul
              id='nav__links__container'
              className=' flex items-center w-2/3 space-x-6 justify-between text-gray-500'
            >
              <li id='nav__link'>
                <Link to='/'>Home</Link>
              </li>
              <li id='nav__link'>
                <Link to='/about'>About</Link>
              </li>
              <li id='nav__link'>
                <Link to='/products'>Products</Link>
              </li>
            </ul>
          </nav>
          <div
            id='cart__login'
            className='flex items-center justify-between w-40  font-bold'
          >
            <Link to='/cart'>
              <div id='cart__login__flex' className='flex gap-1'>
                <p>Cart</p>
                {/* cart logo */}
                <div>
                  <ShoppingCartIcon />
                  <sup
                    style={{ borderRadius: '50%' }}
                    className='-ml-3 bg-yellow-400 text-base px-1 py-0 '
                  >
                    {/* cart state goes here */}
                    {cart.numberOfItemsInCart}
                  </sup>
                </div>
              </div>
            </Link>
            <Link to={!cart.user && '/login'}>
              <div
                onClick={() => handleSignOut()}
                id='cart__login__flex'
                className='flex gap-1'
              >
                <p>{cart.user ? 'Sign Out' : 'Sign In'}</p>
                {/* login logo */}
                <PersonIcon />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div
        id='phone__nav'
        className={`flex flex-col items-center justify-center text-center text-lg ${
          open ? 'block' : 'hidden'
        } lg:hidden`}
      >
        <nav id='right__side'>
          <ul
            id='nav__links__container'
            className='space-y-4 text-gray-500 flex flex-col items-center justify-center'
          >
            <li id='nav__link'>
              {' '}
              <Link to='/'>Home</Link>
            </li>
            <li id='nav__link'>
              <Link to='/about'>About</Link>
            </li>
            <li id='nav__link'>
              {' '}
              <Link to='/products'>Products</Link>
            </li>
          </ul>
          <div
            id='cart__login'
            className='flex items-center justify-between w-52 font-bold mt-4'
          >
            <Link to='/cart'>
              <div id='cart__login__flex' className='flex gap-1'>
                <p>Cart</p>
                {/* cart logo */}
                <div>
                  <ShoppingCartIcon />
                  <sup
                    style={{ borderRadius: '50%' }}
                    className='-ml-3 bg-yellow-400 text-base px-1 py-0 '
                  >
                    {/* cart state goes here */}
                    {cart.numberOfItemsInCart}
                  </sup>
                </div>
              </div>
            </Link>
            <Link to={!cart.user && '/login'}>
              <div
                onClick={() => handleSignOut()}
                id='cart__login__flex'
                className='flex gap-1'
              >
                <p>{cart.user ? 'Sign Out' : 'Sign In'}</p>
                {/* login logo */}
                <PersonIcon />
              </div>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
