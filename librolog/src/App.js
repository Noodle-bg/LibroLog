import logo from './logo.svg';
import './App.css';
import Menu from './menu';

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
        <p>
        <code>
        <Menu/>
        </code>
        </p>
      </header>
    </div>
  );
}

export default App;
