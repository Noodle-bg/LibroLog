// MainPage.js
import React from 'react';
import BookCover from './BookCover';
import MainContent from './MainContent';
import OtherContent from './OtherContent';
// import ReadersAlsoEnjoyed from './ReadersAlsoEnjoyed';
import './App1.css'; // Import your CSS file
import { Link } from 'react-router-dom';
import { usePage } from './PageContext';
import logo from './logo.svg';
import Searchbar from './Searchbar';
import Menubar from './Menubar';


function MainPage() {
  const { currentPage } = usePage();
  return (
    <div>
        <header className="header">
        <nav className="App-header">
          <div className='logo-background'>
          <Link to='/' className="logo-link">
            <img src={logo} className="App-logo" alt="logo" height="100px" />
          </Link>
          </div>
          <Searchbar/>
          <ul className="nav-items">
            <li><Link>Login</Link></li>
            <li><Link>Sign-up</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </nav>
      </header>
      <Menubar/>
          <div className="main-page">
    <div className = "main-page-container">
    
      <div className = "main-page-content">
        
      <BookCover isbn = {currentPage}/>
      
    <div className='content'>
      <MainContent isbn = {currentPage} />
      <OtherContent isbn = {currentPage} />
      </div>
     
      
      </div>
      
      
      </div>
      
      

      {/* <ReadersAlsoEnjoyed /> */}

    </div>
    </div>

    
  );
}

export default MainPage;
