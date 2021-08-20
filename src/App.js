import logo from './logo.svg';
import Logo from './fr-Logo-3.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} className="App-logo" alt="logo" />
        <p><br></br>
          Web admin <span style={{color:' lime'}}>Ord-App</span> home page.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React and make it work
        </a>
        <p>
          <b>Coming soon: the <span style={{color:'blue', background: 'yellow'}}>RK</span> food ordering web app</b>
        </p>
      </header>
    </div>
  );
}

export default App;
