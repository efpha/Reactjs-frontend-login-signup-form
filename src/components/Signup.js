import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react"; // Assuming this is configured

function Signup() {
  // State for form inputs
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload on form submission
 
    // Basic password confirmation check
    if (password !== confirmPassword) {
       alert('Passwords do not match');
       return;
    }
 
    // Log data before making the request
    console.log({
       email,
       username,
       password,
    });
 
    try {
       const response = await fetch('http://localhost:3001/api/signup', {
          method: 'POST',
          headers: {
             'Content-Type': 'application/json',
          },
          body: JSON.stringify({
             email,
             username,
             password,
          }),
       });
 
       if (!response.ok) {
          const data = await response.json();
          alert(data.message || 'Signup failed');
          return;
       }
 
       alert('Signup successful');
    } catch (error) {
       console.error('Error during signup:', error);
       alert('Error occurred during signup');
    }
 };
 
  return (
    <div>
      <header className="App-header">
        <div className='cardSignUp'>
          <div className='container'>
            <form onSubmit={handleSubmit}>
              <h5 className="signUpTxt">Create account</h5>
              <hr />
              <div className="inputContainer">
                <div className="EmailInputSection">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="emailInput"
                    placeholder="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Bind input to state
                  />
                </div>
                <div className="fNameInputSection">
                  <label htmlFor="firstName">Username</label>
                  <input
                    type="text"
                    id="firstName"
                    className="firstNameInput"
                    placeholder="e.g. John"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} // Bind input to state
                  />
                </div>
                <div className="passwordInputSection">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    className="passwordInput"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // Bind input to state
                  />
                </div>
                <div className="confirmPasswordInputSection">
                  <label htmlFor="confirmPassword">Confirm password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    className="confirmPasswordInput"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)} // Bind input to state
                  />
                </div>
              </div>

              <div className="btnContainer">
                <button type="submit" className="submitBtn">Sign up</button>
              </div>

              <div className="linkContainer">
                <Link to='/Signin' id='link' className="gotAcc">I already have an account</Link>
              </div>
            </form>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Signup;
