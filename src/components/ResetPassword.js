// import './ResetPassword.css'
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import React, { useEffect, useState } from "react";

function ResetPassword() {

  const [email, setEmail] = useState('')
  const auth = getAuth();

  const triggerResetEmail = async () => {
    await sendPasswordResetEmail(auth, email);
    console.log("Password reset email sent")
  }


  return (
      <div className="resetPassword-main">
          <div className="resetPassword-container">
              <h2>Ripristina la password</h2>
              <div className="resetPassword-form">
                  <form onSubmit={sendPasswordResetEmail}>

                  <label>Email</label> <br />
                  <input className="resetEmailInput" placeholder="Email" type="email" required /> <br/>

                  <label>New password</label> <br />
                  <input className="resetPwInput" placeholder="Password" type="password"  /> <br/>

                  <button className="resetBtn" type="button" onClick={triggerResetEmail}>Forgot password</button>

                  </form>
              </div>
          </div>
      </div>
  )
}

export default ResetPassword;