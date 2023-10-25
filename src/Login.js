import React from 'react';
import './styles4.css'; // Import your CSS file
import Menu from './Menu';

function Loginform() {
    return (
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" placeholder="Enter your username" required />
  
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" required />
  
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }

  
    
function Login() {
    return ( <div>
        <Menu />
    <Loginform />
    </div>); 
    
}

export default Login;
