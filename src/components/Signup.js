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

    //Submit filled inputs only
    if(email == ""|| username == "" || password == ""){
      alert("Fill all the fields")
    }
  
    // Basic password confirmation check
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
   }
  const form_data = { email,username,password }
    try {
      const response = await fetch('https://backend-login-signup-form.onrender.com/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(form_data)
      }
    )
    const result = await response.json(); // response from the backend
    console.log(result.message);  
    } catch (error) {
      alert(error);
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
