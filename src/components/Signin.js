import React from 'react';
import Forgotpassword from './Forgotpassword';
import './App.css';
import { Link } from 'react-router-dom';

function Signin() {
  return (
    <div>
      <header className="App-header">
        <div className='cardSignin'>
          <div className='container'>
            <form>
              <h5 className='signinTxt'>SIGNIN</h5>
              <div className='descriptionContainer'>
                Sign in to access and manage your account
              </div>
              <hr />
              <div className='inputContainer'>
                <div className='emailInputSection'>
                  <label htmlFor="email">Email</label>
                  <input id='email' type="email" className="usernameInput" placeholder="Email" required />
                </div>

                <div className='passwordInputSection'>
                  <label htmlFor="password">Password</label>
                  <input id='password' type="password" className="passwordInput" placeholder="password" required />
                </div>
              </div>
              <div className='btnContainer'>
                <button type="submit" id='submitBtn' className='submitBtn'>Sign in</button>
              </div>
              <div className='linkContainer'>
                <Link to="/Forgotpassword" id='link' className='fgtpswrd'>Forgot password</Link>
                <Link to='/Signup' id='link' className='createAcc'>Don't have an account?</Link>
              </div>
            </form>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Signin;
