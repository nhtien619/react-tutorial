import logo from './logo.svg';
import './App.scss';
import MyComponent from '../components/classes/MyComponent';
import FunctionComponent from '../components/functions/FunctionComponent';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world Tien !!!!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyComponent></MyComponent>
        <FunctionComponent></FunctionComponent>
      </header>

    </div>
  );
}

export default App;
