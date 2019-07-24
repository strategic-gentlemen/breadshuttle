import React from 'react';

const Register = (props) => {
  return (
    <div className='auth-container'>
      <div>

        <div className='auth-input'>
          <div className='icon-box'>

          </div>
          <input type='text'/>

        </div>
        <div className='auth-input'>
          <div className='icon-box'>
            
          </div>
          <input type='password'/>

        </div>
        <button>Register</button>
      </div>
      or
      <a href='/login'>Login</a>
      

    </div>
  );
}

export default Register;