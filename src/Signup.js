import React from 'react';
import './styles3.css'; // Import your CSS file
import Menu from './Menu';

function Signupform() {
    return (

        <div className="signup-container">
        <h2>Sign Up</h2>
        <form>
          <label htmlFor="fname">First Name</label>
          <input type="text" id="fname" name="fname" placeholder="Enter your first name" required />
          <label htmlFor="lname">Last Name</label>
          <input type="text" id="lname" name="lname" placeholder="Enter your last name" required />
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" placeholder="Choose a username" required />
  
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />
  
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Choose a password" required />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm your password" required />
  
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }


  function Signup() {
    return (
      <div className="App">
        <Menu />
        <Signupform />
      </div>
    );
  }

  export default Signup;
