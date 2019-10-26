import React from 'react';
import NavBar from '../common/NavBar';
import Button from '../common/Button';

const Register = (props) => {
  return (
    <div className='auth-container'>
        <NavBar/>
      <div className='header-text'>
        Sign Up
      </div>
      <div className='auth-text'>
        <p>Add your Zipcode so we can look up stores in your area.</p>
      </div>
      <div className='auth-form-container'>
        <form className='auth-form'>
          <div>
            <div className='auth-input'>
              <label htmlFor='fname'>Zipcode</label>
              <input id='fname' type='text'/>
            </div>
          </div>
          <div>
            <Button
              title='Create Account' 
              type='submit'>  
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;