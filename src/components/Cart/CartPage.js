import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { priceChanger } from '../side/functions';
const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div>
      <div className='bg-store flex items-center justify-center mb-8 py-16 '>
        <h3 className='w-4/6 text-3xl font-extrabold'>
          <Link
            to='/'
            className='text-price transition hover:text-gray-700 ease-in-out'
          >
            Home
          </Link>{' '}
          / Cart
        </h3>
      </div>
      <div id='cart__items'>
        <div className='lg:w-4/6 grid grid-cols-3 text-gray-600 lg:grid-cols-5 mx-auto place-items-center my-4 border-b-2 border-store py-4'>
          <p>Item</p>
          <p className='hidden lg:block'>Price</p>
          <p className='hidden lg:block'>Quantity</p>
          <p>Subtotal</p>
        </div>
        <div className='my-3 lg:w-4/6 mx-auto border-b-2 border-store'>
          {cart.productsInCart?.map((product) => {
            console.log(product);
            return (
              <div
                key={product.productId}
                className='w-full grid grid-cols-3 lg:grid-cols-5 mx-auto place-items-center my-4 '
              >
                <div className='grid grid-cols-2 place-items-center gap-2'>
                  <img
                    className='object-contain'
                    src={product.productImage}
                    alt=''
                  />
                  <p className='font-bold capitalize'>{product.productName}</p>
                </div>
                <p className='hidden lg:block text-price'>
                  {product.productPrice}
                </p>
                <p className='hidden lg:block'>{product.howManyBought}</p>
                <p>{product.totalPriceForItem}</p>
                <button
                  className='bg-red-600 rounded-xl p-1 text-white'
                  onClick={() =>
                    dispatch({
                      type: 'REMOVE_ITEM',
                      payload: {
                        productId: product.productId,
                        totalItems: (cart.numberOfItemsInCart -= 1),
                        totalPrice: (cart.totalPrice -=
                          product.unConvertedPrice),
                      },
                    })
                  }
                >
                  <DeleteIcon />
                </button>
              </div>
            );
          })}
        </div>
        <div className='w-52 rounded-xl mx-auto'>
          <button
            className=' w-full rounded-xl py-2 px-4 bg-price mx-auto text-white focus:outline-none'
            onClick={() => dispatch({ type: 'CLEAR_CART' })}
          >
            Clear Cart
          </button>
        </div>
        <div className='lg:w-4/6 mx-auto flex justify-end items-center my-5'>
          <div
            id='total_prices'
            className='w-full lg:w-64 border border-gray-300 py-10  space-y-5 flex flex-col  '
          >
            <div className='w-5/6 mx-auto border-b border-store pb-3 font-bold'>
              <h3 className='flex justify-between'>
                Subtotal : <span>{priceChanger(cart.totalPrice)}</span>
              </h3>
              <h3 className='flex justify-between'>
                Shipping Fee : <span> {priceChanger(5550)}</span>
              </h3>
            </div>
            <div>
              <h2 className='w-5/6 mx-auto flex justify-between font-extrabold text-xl'>
                Total :{' '}
                <span>
                  {cart.totalPrice ? priceChanger(cart.totalPrice + 5550) : 0}
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
