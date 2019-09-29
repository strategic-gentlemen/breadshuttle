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
      
        
      <div className='auth-form-container'>
        <form 
          
          className='auth-form'>
          <div>

            <div className='auth-input'>
              <label for='fname'>First Name</label>
              <input id='fname' type='text'/>
            </div>

            <br/>

            <div className='auth-input'>
              <label for='lname'>Last Name</label>
              <input id='lname' type='text'/>
              
            </div>
            <br/>

            <div className='auth-input'>
              <label for='email'>Email</label>
              <input id='email' type='text'/>
              
            </div>
            <br/>

            <div className='auth-input'>
              <label for='password'>Password</label>
              <input id='password' type='password'/>
              
            </div>
          </div>
          <div>
            <Button
              title='Next' 
              onClick={() => {props.history.push('/register2')}}
              type='button'>
              
                
            </Button>
          </div>
            
          
        </form>
      </div>
    </div>
  );
}

export default Register;