import React from 'react';
import './styles/login.css';
import { Link } from 'react-router-dom';

const SignUp = props => {
  return (
    <section class="login">
    <div class="login__container">
      <h2>Registrarse</h2>
      <form action="" className="login__container--form">
        <input className="input" type="text" name="" placeholder="Nombre" />
        <input className="input" type="email" name="" placeholder="Correo" />
        <input className="input" type="password" name="" placeholder="Contraseña" />
        <button className="button">Registrarse</button>
      </form>
      <p class="login__container--register center"><Link to="/login">Iniciar sesión</Link></p>
    </div>
  </section>
  );

};

export default SignUp;