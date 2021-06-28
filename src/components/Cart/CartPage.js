import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
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
          / Cart
        </h3>
      </div>
      <div id='cart__items'>
        <div className='w-4/6 grid grid-cols-5 mx-auto place-items-center my-4 border-b-2 border-blue-800 py-4'>
          <p>Item</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Subtotal</p>
        </div>
        <div className='my-3 w-4/6 mx-auto border-b-2 border-blue-800'>
          {cart.productsInCart?.map((product) => {
            console.log(product);
            return (
              <div
                key={product.productId}
                className='w-full grid grid-cols-5 mx-auto place-items-center my-4 '
              >
                <div className='grid grid-cols-2 place-items-center gap-2'>
                  <img
                    className='object-contain'
                    src={product.productImage}
                    alt=''
                  />
                  <p>{product.productName}</p>
                </div>
                <p>{product.productPrice}</p>
                <p>{product.howManyBought}</p>
                <p>{product.totalPriceForItem}</p>
                <button
                  onClick={() =>
                    dispatch({
                      type: 'REMOVE_ITEM',
                      payload: {
                        productId: product.productId,
                        totalItems: (cart.numberOfItemsInCart -= 1),
                      },
                    })
                  }
                >
                  remove item
                </button>
              </div>
            );
          })}
        </div>
        <div id='total_prices' className=''></div>
      </div>
    </div>
  );
};

export default CartPage;
