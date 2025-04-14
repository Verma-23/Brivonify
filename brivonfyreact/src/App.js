import logo from './logo.svg';
import './App.css';
import PromotionalBar from './Components/PromotionalBar/PromotionalBar';
import NavUniversal from './Components/NavUniversal/NavUniversal';

function App() {
  return (
    <div className="App">
      {/* Promotional Bar Component  */}
      <PromotionalBar/>

      {/* Main NavBar Component  */}
      <NavUniversal/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
