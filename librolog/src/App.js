import logo from './logo.svg';
import './App.css';
import Newreleases from './Newreleases';
import Footer from './Footer';
import Bestsellers from './Bestsellers';
import Seachabledropdown from './Searchabledropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Bestsellerswithbuttons from './Bestsellerswithbuttons';
import Newreleaseswithbuttons from './Newreleaseswithbuttons';


// ... (previous code)


function App() {
  return (
    <div className="App">
      <header className='header'>
        <nav className="App-header">
          <div className='logo-background'>
            <img src={logo} className="App-logo" alt="logo" height="100px" />
          </div>
          <Seachabledropdown />
          <ul className="nav-items">
            <li><a href="#">Login</a></li>
            <li><a href="#">Signup</a></li>
          </ul>
        </nav>
      </header>
      <p>
        <code>
          <Newreleaseswithbuttons/>
          <Bestsellerswithbuttons/>
        </code>
      </p>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

// ... (remaining code)
