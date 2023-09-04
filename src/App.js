import logo from '../src/assets/trebol.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>En desarrollo...</h2>
        <p>
        ¡Muy pronto estarás a un paso más cerca de tu suerte! 😉✨
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hecho con React!
        </a>
      </header>
    </div>
  );
}

export default App;
