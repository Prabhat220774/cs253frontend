import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='signup-position'>
      <div className='signup-box'>
        <div className='signup-heading'>Sign Up</div>
        <div className='cont2'>
          <div className='input-field'>
            <input type="text" required spellCheck="false" />
            <label>Enter Name</label>
          </div>
          <div className='input-field'>
            <input type="text" required spellCheck="false" />
            <label>Enter Roll No.</label>
          </div>
          <div className='input-field'>
            <input type="email" required spellCheck="false" />
            <label>Enter Email</label>
          </div>
          <div className='input-field'>
            <input type={showPassword ? "text" : "password"} required spellCheck="false" />
            <label>Password</label>
            <span className="toggle-password" onClick={togglePasswordVisibility}>
              {/* {showPassword ? "Hide" : "Show"} */}
            </span>
          </div>
          <div className='input-field'>
            <input type={showPassword ? "text" : "password"} required spellCheck="false" />
            <label>Confirm Password</label>
            <span className="toggle-password" onClick={togglePasswordVisibility}>
              {/* {showPassword ? "Hide" : "Show"} */}
            </span>
          </div>
          <div className='input-field'>
            <input type="text" required spellCheck="false" />
            <label>Enter Branch</label>
          </div>
        </div>
        <div className='btn'>Sign Up</div>
        <div className='btm'>Already have an account? <Link to="/Login">Sign in</Link></div>
      </div>
    </div>
  );
}

export default SignUp;
