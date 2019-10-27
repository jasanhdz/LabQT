import React from 'react';
import ReactDom from 'react-dom';
import App from './routes/App';
import  './firebase/Entry/index'; 
import { createBrowserHistory } from 'history';
import { Router } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; 
import reducer from './reducers/index';
import { Map as map } from 'immutable';

const store = createStore(
  reducer,
  map({}),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
  
const app = document.getElementById("app");
const history = createBrowserHistory({
  basename: "https://jasanhdz.github.io/LabQT/public/"
});

ReactDom.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  app
);