// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Footer from './Footer';
import Home from './Home';
import './App.css'
import Categorydisplay from './Categorydisplay'
function App() {
  
  return (
      <div className="App">
    <Router>

        <Routes>
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path='/' element={<Home/>}/>
          <Route path='/catdisplay' element={<Categorydisplay/>} />
        </Routes>
    </Router>
        <footer>
          <Footer />
        </footer>
      </div>
  );
}

export default App;
