import React from 'react';

const Login = (props) => {
  return (
    <div className='auth-container'>
      <div className='auth-top'>
        <div className='place-holder logo'></div>

      </div>
      <div className='auth-bottom'>

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
        <button onClick={ () => {
          props.history.push('/')
        }} >login</button>
        <br/>
        <hr/>
        <div className='oauth-container'>
          <div className='place-holder'> Google</div>
          <div className='place-holder'> FaceBook</div>
          <div className='place-holder'> Other</div>
        </div>
        <hr/>
        <div>
          or
          <br/>
          <a href='/register'>Register</a>
        </div>
      </div>

    </div>
  );
}

export default Login;