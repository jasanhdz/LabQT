import React from 'react';
import ReactDom from 'react-dom';
import App from './routes/App';
import  './firebase/Entry/index'; 
import { createBrowserHistory } from 'history';
import { Router } from 'react-router';


const app = document.getElementById("app");
const history = createBrowserHistory();

ReactDom.render(
  <Router history={history}>
    <App />
  </Router>,
  app
);