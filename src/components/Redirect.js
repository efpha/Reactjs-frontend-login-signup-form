import React from "react";
import { Link } from "react-router-dom";

function Redirect(){
    return(
        <div className="redirectContainer">
            <div className="instruction">
                We sent a link to reset password to your email.
                <p>
                    Proceed to <Link to="/Signin" id="link" className="backToSignin">sign in into your account</Link>
                </p>
            </div>
        </div>
    )
}
export default Redirect;