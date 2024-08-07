import React from 'react';
import ReactDOM from 'react-dom/client';
// react-redux
import { Provider, createStoreHook } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './store/reducers/rootReducer';
// import react-router-dom
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import App from './views/App.js';
import reportWebVitals from './reportWebVitals';
import './styles/global.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import ListTodo from './views/Todos/ListTodo.js';
import Home from './views/Home/Home.js';
import About from './views/About/About.js';
import ListUser from './views/Users/ListUser.js';
import UserDetail from './views/Users/UserDetail.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
const rexduxStore = createStore(rootReducer);
root.render(
  <React.StrictMode>
    <Provider store={rexduxStore}>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route path='/' element={<Home />} />
            <Route path='todos' element={<ListTodo />} />
            <Route path='about' element={<About />} />
            <Route path='users' element={<ListUser />} />
            <Route path='users/:id' element={<UserDetail />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
