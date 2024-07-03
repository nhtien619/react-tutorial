import logo from './logo.svg';
import './App.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import FormComponent from '../components/classes/FormComponent'
import ListTodo from './Todos/ListTodo';
import Nav from './Nav/Nav';
import Home from './Home/Home';
import About from './About/About';
import { Outlet } from "react-router-dom";


function App() {
  return (

    <div className="App">

      <header className="App-header">
        <Nav />
        <Outlet />
        <ToastContainer style={{ "width": 250, "fontSize": 16 }}
          position="top-right"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark" stacked></ToastContainer>
      </header>

    </div>



  );
}

export default App;
