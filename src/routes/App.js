import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Wrapper.jsx';
import Home from '../containers/Home.jsx';
import Login from '../containers/Login.jsx';
import SignUp from '../containers/Register.jsx';
import NotFound from '../components/NotFound.jsx';

require('dotenv').config();

const App = () => (
  <BrowserRouter >
    <Layout>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={Home}/>
        <Route exact path={process.env.PUBLIC_URL + "/login"} component={Login}/>
        <Route exact path={process.env.PUBLIC_URL + "/register"}component={SignUp} />
        <Route exact path={process.env.PUBLIC_URL + "/uso"}component={SignUp} />
        <Route exact path={process.env.PUBLIC_URL + "/privacidad"}component={SignUp} />
        <Route exact path={process.env.PUBLIC_URL + "/ayuda"}component={SignUp} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);


export default App