import React, { useState } from "react";
import { Link } from "react-router-dom";
import Redirect from "./Redirect";

function Forgotpassword(){
const [email, setEmail] = useState('');

  const handleSubmit = async(e) =>{
    e.preventDefault();

    const response = await fetch('http://localhost:5000/api/forgotpassword', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({ email })
    }
  )

  const result = await response.json(); // response from the backend
  console.log(result);
    document.getElementById('redirectLink').click(); //triggering navigation manually
  }

    return (
        <div>
          <header className="App-header">
            <div className='cardFgtPswrd'>
              <div className='container'>
                  <h5 className="forgotPasswordTxt">Reset password</h5>
                  <div className='descriptionContainer'>Enter your email address and we will send a link to reset your password</div>
                  <hr />
                  <div className="inputContainer">
                    <div className='emailInputSection'>
                      <form onSubmit={handleSubmit}>
                        <label htmlFor="email">Your verified email</label>
                        <input id='email' type="email" className="usernameInput" onChange={(e) => setEmail(e.target.value)} placeholder="e.g. johndoe@example.com" required />
                        <div className='btnContainer'>
                          <button type="submit" id='submitBtn' className='submitBtn'>Send password reset email</button>
                          <Link to="/Redirect" id="redirectLink" className="backToSignin">                          </Link>
                        </div>
                      </form>
                    </div>
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