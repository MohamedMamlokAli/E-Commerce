import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import openMenu from '../images/icon-hamburger.svg';
import closeMenu from '../images/icon-close.svg';
import logo from '../images/logo.221f6b13.svg';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
const Navbar = () => {
  const [open, isOpen] = useState(false);
  return (
    <header id='page__header' className='max-w-7xl mx-auto'>
      <div
        id='container'
        className='w-full flex items-center justify-between px-3 py-3'
      >
        <img id='logo__image' className='w-44' src={logo} alt='ComfySloth' />
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
              <li id='nav__link'>About</li>
              <li id='nav__link'>
                <Link to='/products'>Products</Link>
              </li>
            </ul>
          </nav>
          <div
            id='cart__login'
            className='flex items-center justify-between w-40  font-bold'
          >
            <div id='cart__login__flex' className='flex gap-1'>
              <p>Cart</p>
              {/* cart logo */}
              <div>
                <ShoppingCartIcon />
                <sup
                  style={{ borderRadius: '50%' }}
                  className='-ml-3 bg-yellow-400 text-base px-1 py-0 '
                >
                  {/* cart state goes here */}0
                </sup>
              </div>
            </div>
            <div id='cart__login__flex' className='flex gap-1'>
              <p>Login</p>
              {/* login logo */}
              <PersonIcon />
            </div>
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
            <li id='nav__link'>Home</li>
            <li id='nav__link'>About</li>
            <li id='nav__link'>Products</li>
          </ul>
          <div
            id='cart__login'
            className='flex items-center justify-between w-52 font-bold mt-4'
          >
            <div id='cart__login__flex' className='flex gap-1'>
              <p>Cart</p>
              {/* cart logo */}
              <div>
                <ShoppingCartIcon />
                <sup
                  style={{ borderRadius: '50%' }}
                  className='-ml-3 bg-yellow-400 text-base px-1 py-0 '
                >
                  {/* cart state goes here */}0
                </sup>
              </div>
            </div>
            <div id='cart__login__flex' className='flex gap-1'>
              <p>Login</p>
              {/* login logo */}
              <PersonIcon />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
