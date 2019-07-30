import React from 'react';

const Register = (props) => {
  return (
    <div className='auth-container'>
      <div className='auth-top'>
        <div className='place-holder logo'></div>

      </div>
      <div className='auth-bottom'>

        <div className='auth-input'>
          <div className='icon-box'>

          </div>
          <input type='text' placeholder='Email'/>

        </div>
        <div className='auth-input'>
          <div className='icon-box'>
            
          </div>
          <input type='password' placeholder='Password'/>

        </div>
        <button onClick={() => {
          props.history.push('/')
        }}>Register</button>
        <br/>
        
        <div>
          or
          <br/>
          <a href='/login'>Login</a>
        </div>
      </div>

    </div>
  );
}

export default Register;