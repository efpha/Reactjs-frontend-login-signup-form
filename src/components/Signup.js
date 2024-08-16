import React from "react";
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div>
      <header className="App-header">
        <div className='cardSignUp'>
          <div className='container'>
            <form>
              <h5 className="signUpTxt">Create account</h5>
              <hr />
              <div className="inputContainer">
                <div className="EmailInputSection">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" className="emailInput" placeholder="email" required />
                </div>
                <div className="fNameInputSection">
                  <label htmlFor="firstName">First name</label>
                  <input type="text" id="firstName" className="firstNameInput" placeholder="e.g. John" required />
                </div>
                <div className="passwordInputSection">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" className="passwordInput" required />
                </div>
                <div className="confirmPasswordInputSection">
                  <label htmlFor="confirmPassword">Confirm password</label>
                  <input type="password" id="confirmPassword" className="confirmPasswordInput" required />
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
  )
}

export default Signup;
