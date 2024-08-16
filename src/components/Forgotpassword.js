import React from "react";
import { Link } from "react-router-dom";
import Redirect from "./Redirect";

function Forgotpassword(){
    return (
        <div>
          <header className="App-header">
            <div className='cardFgtPswrd'>
              <div className='container'>
                <section>

                </section>
                  <h5 className="forgotPasswordTxt">Reset password</h5>
                  <div className='descriptionContainer'>Enter your email address and we will send a link to reset your password</div>
                  <hr />
                  <div className="inputContainer">
                    <div className='emailInputSection'>
                      <label htmlFor="email">Your verified email</label>
                      <input id='email' type="email" className="usernameInput" placeholder="e.g. johndoe@example.com" required />
                    </div>
                  </div>
                  <div className='btnContainer'>
                  <Link to="/Redirect" id="link" className="backToSignin">
                    <button type="submit" id='submitBtn' className='submitBtn'>Send password reset email</button>
                  </Link>
                  </div>

                  <div className='linkContainer'>
                  <Link to='/Signin' id='link' className="gotAcc">Back to Sign in</Link>
                  </div>
                </div>
            </div>
          </header>
        </div>
      );
}
export default Forgotpassword;