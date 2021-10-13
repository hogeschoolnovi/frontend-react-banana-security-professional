import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthContextProvider from './context/AuthContext';
import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthContextProvider>
        <App/>
      </AuthContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);