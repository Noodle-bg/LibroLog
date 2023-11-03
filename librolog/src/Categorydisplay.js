import React from "react";
import { Link } from "react-router-dom";
import Searchabledropdown from "./Searchabledropdown";
import logo from './logo.svg';
const Categorydisplay =()=>{
    return(
        <div>
        <header className="header">
        <nav className="App-header">
          <div className='logo-background'>
          <Link to='/' className="logo-link">
            <img src={logo} className="App-logo" alt="logo" height="100px" />
          </Link>
          </div>
          <Searchabledropdown/>
          <ul className="nav-items">
            <li><Link>Login</Link></li>
            <li><Link>Sign-up</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </nav>
        
      </header>

        </div>
    )
}
export default Categorydisplay;