import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './views/App.js';
import reportWebVitals from './reportWebVitals';
import './styles/global.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import ListTodo from './views/Todos/ListTodo.js';
import Home from './views/Home/Home.js';
import About from './views/About/About.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path='todos' element={<ListTodo />} />
          <Route path='about' element={<About />} />
        </Route>

      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
