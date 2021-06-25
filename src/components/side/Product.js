import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  root: {
    minWidth: '300px',
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
  let priceArray = [];
  let stringPrice = price.toString();
  for (let i = 0; i < stringPrice.length; i++) {
    priceArray.push(parseInt(stringPrice[i]));
  }
  let formattedPrice = `${priceArray
    .slice(0, priceArray.length - 2)
    .join('')}.${priceArray
    .slice(priceArray.length - 2, priceArray.length)
    .join('')}`;
  console.log(formattedPrice);

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={img} title={name} />
        <CardContent className='flex justify-between text-sm bg-gray-50'>
          <p className='text-gray-700'>{name}</p>
          <p>
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 2,
            }).format(formattedPrice)}
          </p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
