import logo from './logo.svg';
import './App.css';
import Newreleases from './Newreleases';
import Footer from './Footer';
import Bestsellers from './Bestsellers';
import Seachabledropdown from './Searchabledropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  
  return (
    <div className="App">
      <header className='header' >
        <nav className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Seachabledropdown/>
        <ul className="nav-items">
          <li><a href="#">Login</a></li>
          <li><a href="#">Signup</a></li>
        </ul>
        </nav>
      </header>
      <p>
      <code>
      <Newreleases/>
      {/* <Menu/> */}
      <Bestsellers/>
      </code>s
      </p>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
