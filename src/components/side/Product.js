import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { priceChanger } from './functions';

const useStyles = makeStyles({
  root: {
    minWidth: '28%',
    flexGrow: '1',
    boxShadow: 'none',
  },
  media: {
    height: 140,
  },
  content: {
    fontWeight: 'normal',
  },
});

export default function Product({ name, img, price }) {
  const classes = useStyles();

  let newPrice = priceChanger(price);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={img} title={name} />
        <CardContent className='flex justify-between text-sm bg-gray-50'>
          <div className='flex items-center justify-between w-full'>
            <p className='text-gray-700 tracking-widest text-base'>{name}</p>
            <p className='text-price'>{newPrice}</p>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
