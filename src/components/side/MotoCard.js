import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 310,
    backgroundColor: '#c5a491',
    margin: '2rem 0',
  },
  media: {
    height: 140,
  },
  iconsDiv: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '64px',
    height: '64px',
    background: 'white',
    borderRadius: '50%',
  },
  icon: {
    fontSize: '40px',
  },
  actionArea: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '1.5rem 1rem',
  },
  content: {
    fontWeight: 'bold',
  },
});

export default function MediaCard({ name, description, icon }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea className={`${classes.actionArea} p-20`}>
        <div className={classes.iconsDiv}>{icon}</div>
        <CardContent>
          <Typography
            gutterBottom
            className={classes.content}
            variant='h5'
            component='h2'
          >
            {name}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
