import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Wrapper.jsx';
import Home from '../containers/Home.jsx';
import Login from '../containers/Login.jsx';
import SignUp from '../containers/Register.jsx';
import NotFound from '../components/NotFound.jsx';
import Programas from '../pages/containers/Programas.jsx';
import ServicioSocial from '../pages/containers/ServicioSocial.jsx';
import Practicas from '../pages/containers/Practicas.jsx';
import Ciencia from '../pages/containers/Ciencia.jsx';
import Proyectos from '../pages/containers/Proyectos.jsx';

require('dotenv').config();

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={Home}/>
        <Route exact path={process.env.PUBLIC_URL + "/login"} component={Login}/>
        <Route exact path={process.env.PUBLIC_URL + "/register"}component={SignUp} />
        <Route exact path={process.env.PUBLIC_URL + "/uso"}component={SignUp} />
        <Route exact path={process.env.PUBLIC_URL + "/privacidad"}component={SignUp} />
        <Route exact path={process.env.PUBLIC_URL + "/ayuda"} component={SignUp} />
        
        <Route exact path={process.env.PUBLIC_URL + "/programas"}component={Programas} />
        <Route exact path={process.env.PUBLIC_URL + "/servicio-social"}component={ServicioSocial} />
        <Route exact path={process.env.PUBLIC_URL + "/practicas"}component={Practicas} />
        <Route exact path={process.env.PUBLIC_URL + "/ciencia"}component={Ciencia} />
        <Route exact path={process.env.PUBLIC_URL + "/proyectos"}component={Proyectos} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);


export default App