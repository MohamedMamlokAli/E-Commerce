import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: '20%',
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
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={img} title={name} />
        <CardContent className='flex justify-between text-sm bg-gray-50'>
          <Typography
            className='text-gray-700'
            gutterBottom
            variant='h6'
            component='h2'
          >
            {name}
          </Typography>
          <Typography gutterBottom variant='h6' component='h2'>
            {formatter.format(price)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
