import React from 'react';

const Login = (props) => {
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
        <button>login</button>
      </div>
      or
      <a href='/register'>Register</a>

    </div>
  );
}

export default Login;