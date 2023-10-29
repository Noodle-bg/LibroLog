import React from "react";
import Topauthorswithbuttons from "./Topauthorswithbuttons";
import Searchabledropdown from "./Searchabledropdown";
import logo from './logo.svg';
import { Link } from "react-router-dom";
import Menubar from "./Menubar";
import Fictionwithbuttons from "./Fictionwithbuttons";
import Nonfictionwithbuttons from "./Nonfictionwithbuttons";
import Youngadultswithbuttons from "./Youngadultswithbuttons";
import Businesswithbuttons from "./Buisnesswithbuttons";
function Home(){
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
        <div>
          <Menubar/>
          {/* ... Add other components here */}
          <Fictionwithbuttons/>
          <Nonfictionwithbuttons/>
          <Youngadultswithbuttons/>
          <Businesswithbuttons/>
          <Topauthorswithbuttons/>
        </div>
        </div>
    )
}
export default Home;