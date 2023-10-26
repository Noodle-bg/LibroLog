import React from "react";
import { Link } from "react-router-dom";
import logo from './logo.svg';
import Sidebar from "./Sidebar";

function Dashboard() {
  return (
    <div className="Dashboard">
      <header>
        <div className='logo-background'>
          <Link to='/' className="logo-link">
            <img src={logo} className="App-logo" alt="logo" height="100px" />
          </Link>
        </div>
      </header>
        <div id="sidebar">
          <Sidebar pageWrapId={"page-wrap"} outerContainerId={"sidebar"} />
      <div className="content">
        <div>
          Users's Profile
        </div>
        <div className="stats-cont">
        <fieldset className="stats-box">
          
            <legend><b style={{color:"white",textAlign:"left"}}>Statistics</b></legend>
          <form className="stats">
            <ul>
              <li><Link>Reading</Link></li>
              <li><Link>Completed</Link></li>
              <li><Link>On-Hold</Link></li>
              <li><Link>Dropped</Link></li>
              <li><Link>Plan to Read</Link></li>
            </ul>
          </form>
        </fieldset>
        </div>
      </div>
    </div>
        </div>
  );
}

export default Dashboard;
