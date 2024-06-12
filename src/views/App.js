import logo from './logo.svg';
import './App.scss';
//import FormComponent from '../components/classes/FormComponent'
import ListTodo from './Todos/ListTodo';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* <FormComponent /> */}
        <ListTodo />
      </header>

    </div>
  );
}

export default App;
