// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Footer from './Footer'; // Don't forget to import Footer
import Home from './Home';
import './App.css'
function App() {
  return (
      <div className="App">
    <Router>

        <Routes>
          <Route path="/dashboard" element={<Dashboard/>} />
          {/* Other routes for your existing pages/components */}
          <Route path='/' element={<Home/>}/>
        </Routes>
    </Router>
        <footer>
          <Footer />
        </footer>
      </div>
  );
}

export default App;
