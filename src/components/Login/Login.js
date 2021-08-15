import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { auth } from '../../firebase';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      height: 'fit-content',
      display: 'flex',
      flexDirection: 'column',
      paddingTop: '20px',
      paddingBottom: '20px',
    },
  },
}));

const Login = () => {
  const classes = useStyles();
  const history = useHistory();
  document.title = 'Login';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => console.log(auth))
      .catch((error) => alert(error));
  };
  const signIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => history.push('/'))
      .catch((error) => alert(error));
  };
  return (
    <section>
      <div className='bg-store flex items-center justify-center mb-8 py-16 '>
        <h3 className='w-4/6 text-3xl font-extrabold'>
          <Link
            to='/'
            className='text-price transition hover:text-gray-700 ease-in-out'
          >
            Home
          </Link>{' '}
          / Login
        </h3>
      </div>
      <div
        id='login__container'
        className='w-1/2 h-auto mx-auto flex flex-col items-center justify-center'
      >
        <form
          className={classes.root}
          action=''
          onSubmit={(e) => {
            e.preventDefault();
            setEmail('');
            setPassword('');
          }}
        >
          <h1>Sign in</h1>
          <TextField
            id='standard-basic'
            type='email'
            required
            label='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id='standard-basic'
            type='password'
            required
            label='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className='flex flex-col items-center gap-3'>
            <button
              className='bg-price w-24 text-gray-100 py-1 rounded-xl'
              onClick={() => signIn()}
            >
              Sign in
            </button>
            <button
              className='bg-price w-24 text-gray-100 py-1 rounded-xl'
              onClick={() => signUp()}
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
