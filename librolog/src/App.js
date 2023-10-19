import logo from './logo.svg';
import './App.css';
import Menu from './menu';
import Newreleases from './Newreleases';
import Footer from './Footer';
import Bestsellers from './Bestsellers';

function App() {
  return (
    <div className="App">
      <header  >
        <nav className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </code>
      </p>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
