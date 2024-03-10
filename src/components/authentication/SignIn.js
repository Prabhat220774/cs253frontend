import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styl.css'


function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className='login-position'>
    <div className='login-box'>
        <div className='login-heading'>Login</div>
        <div className='cont2'>
        <div className='input-field' >
          <input type="text" required spellcheck="false" />
          <label>Enter email</label>
         </div>
         <div className='input-field'>
            <input type={showPassword ? "text" : "password"} required spellCheck="false" />
            <label>Password</label>
            <span className="toggle-password" onClick={togglePasswordVisibility}>
              {/* {showPassword ? "Hide" : "Show"} */}
            </span>
            </div>
        </div>
        <a href='#pass'>Forgot Password?</a> 
        <div className='btn'>Login</div> 
        <div className='btm'>New Student? <Link to="/SignUp">Sign up</Link></div>
        {/* <div className='btm'>New Faculty? <Link to="/SignUp">Sign up</Link></div>  */}
        
    </div>
    </div>
  )
}

export default SignIn;