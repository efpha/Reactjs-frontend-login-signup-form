import React, { useState } from 'react';
import Forgotpassword from './Forgotpassword';
import './App.css';
import { Link } from 'react-router-dom';

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async(e) => {
    //frontend form validation
    if(email ==="" || password ===""){
      alert("Fill all the fields");
      return;
    }
    try {
      const response = await fetch('http://localhost:5000/api/signin', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({ email, password})
      }
    )
    const result = await response.json(); // response from the backend
    console.log("From frontend",result);
    
    } catch (error) {
      console.log('Error occurred while signing in(frontend)', error);
    }
  }
  return (
    <div>
      <header className="App-header">
        <div className='cardSignin'>
          <div className='container'>
            <form onSubmit={handleSubmit}>
              <h5 className='signinTxt'>SIGNIN</h5>
              <div className='descriptionContainer'>
                Sign in to access and manage your account
              </div>
              <hr />
              <div className='inputContainer'>
                <div className='emailInputSection'>
                  <label htmlFor="email">Email</label>
                  <input id='email' type="email" value={email} className="usernameInput" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                </div>

                <div className='passwordInputSection'>
                  <label htmlFor="password">Password</label>
                  <input id='password' type="password" value={password} className="passwordInput" placeholder="password" onChange={(e) => setPassword(e.target.value)} /*required*/ />
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
