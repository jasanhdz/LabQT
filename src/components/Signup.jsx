import React from 'react';
import './styles/login.css';
import { Link } from 'react-router-dom';
require('dotenv').config();

const SignUp = props => {
  return (
    <section className="login">
    <div className="login__container">
      <h2>Registrarse</h2>
      <form onSubmit={props.handleSubmitRegistry} action="POST" className="login__container--form">
        <input className="input" type="text" ref={props.setRefName} placeholder="Nombre" />
        <input className="input" type="email" ref={props.setRefEmail} placeholder="Correo" />
        <input className="input" type="password" ref={props.setRefPass} placeholder="Contraseña" />
        <button onSubmit={props.handleSubmitRegistry} className="button">Registrarse</button>
      </form>
      <p className="login__container--register center"><Link to={process.env.PUBLIC_URL + '/login'}>Iniciar sesión</Link></p>
    </div>
  </section>
  );

};

export default SignUp;