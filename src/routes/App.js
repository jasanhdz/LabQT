import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Wrapper.jsx';
import Home from '../containers/Home.jsx';
import Login from '../containers/Login.jsx';
import SignUp from '../containers/Register.jsx';
import NotFound from '../components/NotFound.jsx';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={SignUp} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;