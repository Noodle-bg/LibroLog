import React from 'react';


import Menubar from './Menubar';
import Footer from './Footer';

import MainPage from './MainPage';
import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <div className="App">
      <header className='header'>
        <nav className='App-header'>
          <div className ='logo-background'>
            <img src = {logo} className='App-logo' alt='logo' height= "100px" />
            </div>
            
            <div className ='nav-items'>
              <ul>
              <li><a href = "#">Login</a></li>
              <li><a href = "#">Sign Up</a></li>
              <li><a href = "#">Dashboard</a></li>
              </ul>
            </div>
        </nav>
        <div>
          <Menubar/>
          </div>
          </header>

          <p>
            <code>
              <MainPage/>
            </code>
          </p>
        <footer>
          <Footer/>
        </footer>

        
        
       
      
      
     
    </div>
  );
}

export default App;
