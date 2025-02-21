import React from 'react'
import './CSS/Authentication.css'

export const Authentication = () => {
  return (
    <div className='authentication'>
      <div className='authentication-container'>
        <h1>Sign Up</h1>
        <div className="authentication-field">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="authentication-login">Already have an account? <span>Login here</span></p>
        <div className="authentication-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}
