import React from 'react';
import Button from '../common/Button';

const Login = (props) => {
  return (
    <div className='auth-container'>
      <div className='header-text'>
        Log In
      </div>
      <div className='auth-form-container'>
        <form className='auth-form'>
          <div>
            <div className='auth-input'>
              <label htmlFor='email'>Email</label>
              <input id='email' type='text'/>
            </div>
            <br/>
            <div className='auth-input'>
              <label htmlFor='password'>Password</label>
              <input id='password' type='password'/>  
            </div>
          </div>
          <div>
            <Button
              title='Login' 
              type='submit'>         
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;