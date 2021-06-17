import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    width: '80%',
    flexGrow: '1',
  },
  input: {
    width: '100%',
  },
}));

const NewsLetter = () => {
  const classes = useStyles();

  return (
    <section
      id='newsletter'
      className=' lg:px-20 py-10 flex flex-col items-center justify-center'
    >
      <h1 className='text-3xl lg:text-4xl mb-10 px-10'>
        Join our newsletter and get 20% off
      </h1>
      <div className='flex flex-col lg:flex-row gap-10  '>
        <p className='px-10'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint
          unde quaerat ratione soluta veniam provident adipisci cumque eveniet
          tempore?
        </p>

        <FormControl variant='outlined' className={classes.root}>
          <div className='flex'>
            <InputLabel htmlFor='component-outlined'>Email</InputLabel>
            <OutlinedInput
              id='component-outlined'
              value='Enter here...'
              label='Name'
              className={classes.input}
            />
            <Button
              variant='contained'
              color='primary'
              className={classes.button}
            >
              Send
            </Button>
          </div>
        </FormControl>
      </div>
    </section>
  );
};

export default NewsLetter;
