import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>
          Amandha Wingert Barok 
          <h4>
            React App
          </h4>
          <h6>
            Master's in Information Technology
          </h6>
          <h6>
              Atlantis University. Miami, FL.
            </h6>
        </h3>

        <a
          className="App-link"
          href="https://www.linkedin.com/in/amandha-barok/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Amandha's LinkedIn
        </a>
      </header>
    </div>
  );
}

export default App;
