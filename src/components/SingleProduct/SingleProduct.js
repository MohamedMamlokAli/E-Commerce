import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from '../side/Button';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import { priceChanger } from '../side/functions';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& > * + *': {
      marginTop: theme.spacing(1),
    },
  },
}));

const SingleProduct = ({ match }) => {
  const [data, setData] = useState({ images: [{ url: '' }] });
  const [loading, isLoading] = useState(true);
  const [price, setPrice] = useState(0);
  const productID = match.params.id;
  const single_product_url = `https://course-api.com/react-store-single-product?id=${productID}`;
  useEffect(() => {
    axios
      .get(single_product_url)
      .then((res) => {
        setData(res.data);
        setPrice(priceChanger(res.data.price));
      })
      .finally(() => {
        isLoading(false);
      });
  }, [productID]);
  console.log(data);
  const classes = useStyles();

  return (
    <div>
      {loading ? (
        <h1>loading</h1>
      ) : (
        <div>
          <div className='bg-store flex items-center justify-center mb-8 py-16'>
            <h3 className='w-4/6 text-2xl lg:text-3xl font-extrabold'>
              <Link
                to='/'
                className='text-price transition hover:text-gray-700 ease-in-out mr-3'
              >
                Home
              </Link>
              /
              <Link
                to='/products'
                className='text-price transition hover:text-gray-700 ease-in-out mx-3'
              >
                Products
              </Link>
              / {data.name}
            </h3>
          </div>
          <div className='w-5/6 mx-auto'>
            <Link to='/products'>
              <Button name='BACK TO PRODUCTS' />
            </Link>
            <div id='product__image' className='h-80 w-full my-5 rounded-lg'>
              <img
                className='h-full w-full object-cover rounded-lg'
                src={data.images[0].url}
                alt=''
              />
            </div>
            <div id='product__info' className='py-5'>
              <h2 className='text-3xl text-gray-700 font-bold capitalize tracking-widest'>
                {data.name}
              </h2>
              <div className='flex text-sm items-center my-4'>
                <div className={classes.root}>
                  <Rating
                    name='half-rating-read'
                    precision={0.5}
                    value={data.stars}
                    readOnly
                  />
                </div>
                <p>({data.reviews} customers reviews)</p>
              </div>
              <p className='text-price font-bold tracking-widest text-sm'>
                {price}
              </p>
              <p className='text-gray-500 text-sm leading-7'>
                {data.description}
              </p>
              <div id='secondary__info'>
                <p className='font-bold'>
                  Available:{' '}
                  <span className='text-sm font-normal ml-8 text-gray-500'>
                    {data.stock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </p>
                <p className='font-bold'>
                  SKU:{' '}
                  <span className='text-sm font-normal ml-8 text-gray-500'>
                    {data.id}
                  </span>
                </p>
                <p className='font-bold'>
                  Brand:{' '}
                  <span className='text-sm font-normal ml-8 text-gray-500'>
                    {data.company}
                  </span>
                </p>
              </div>
              <div id='add__to__cart' className='my-5 text-2xl font-bold'>
                <div className='flex'>
                  <button>-</button>
                  <p className='mx-5'>1</p>
                  <button>+</button>
                </div>
                <Button name='ADD TO CART' />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
