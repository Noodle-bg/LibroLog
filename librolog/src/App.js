// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Footer from './Footer';
import Home from './Home';
import './App.css'
import Categorydisplay from './Categorydisplay'
import { PageProvider } from './PageContext';
import Searchdisplay from './Searchdisplay';
import MainPage from './MainPage';
function App() {
  
  return (
    <PageProvider>
      <div className="App">
    <Router>

        <Routes>
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path='/' element={<Home/>}/>
          <Route path='/catdisplay' element={<Categorydisplay />} />
          <Route path='/search' element={<Searchdisplay/>}/>
          <Route path='/book' element={<MainPage/>}/>
        </Routes>
    </Router>
        <footer>
          <Footer />
        </footer>
      </div>
      </PageProvider>
  );
}

export default App;
