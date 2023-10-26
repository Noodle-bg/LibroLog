import React from "react";
import Newreleaseswithbuttons from "./Newreleaseswithbuttons";
import Bestsellerswithbuttons from "./Bestsellerswithbuttons";
import Youngreadersbutton from "./Youngreadersbuttons";
import Topauthorswithbuttons from "./Topauthorswithbuttons";
import Searchabledropdown from "./Searchabledropdown";
import logo from './logo.svg';
import { Link } from "react-router-dom";
import Menubar from "./Menubar";
function Home(){
    return(
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
        <div>
          <Menubar/>
          {/* ... Add other components here */}
          <Newreleaseswithbuttons/>
          <Bestsellerswithbuttons/>
          <Youngreadersbutton/>
          <Topauthorswithbuttons/>
        </div>
      </header>
    )
}
export default Home;