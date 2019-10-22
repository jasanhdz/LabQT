import React from 'react';
import './styles/login.css';
import { Link } from 'react-router-dom';
import GooglePng from '../assets/google.png';
import FacebokPng from '../assets/facebook.png';

const Login = props => {
  return (
    
    <section className="login">
      <div className="login__container">
        <h2 tabIndex="0">Inicia Sesión</h2>
        <form onSubmit={props.handleSubmit} className="login__container--form" action="" method="post">
          <input
            aria-label="Correo"
            className="input" type="email" name="" placeholder="Correo"
            ref={props.setRefEmail} onFocus={props.handleFocus} onBlur={props.removeFocus}
          />
          <input
            aria-label="Contraseña"
            className="input" type="password" name="" placeholder="Contraseña"
            ref={props.setRefPass} onFocus={props.handleFocus} onBlur={props.removeFocus}
          />
          <button
            className="button" type="submit"
            onSubmit={props.handleSubmit}
          >Iniciar Sesión</button>
          <div className="login__container--remember-me">
            <label>
              <input type="checkbox" name="box1" value="checkbox" />Recuerdame
            </label>
            <a href="/">Olvide mi Contraseña</a>
          </div>
        </form>
        <section className="social-media">
          <div
            onClick={props.loginwhitGoogle}
            className="media__img"><img width="40px" src={GooglePng} alt="Google" />Inicia sesión con Google</div>
          <div
            onClick={props.loginWithFacebook}
            className="media__img"><img width="40px" src={FacebokPng} alt="Twitter" />Inicia sesión con Twitter</div>
        </section>
        <p className="login__container--register">
          No tienes niguna cuenta. <Link to="/register">Regístrate</Link>
        </p>
      </div>
    </section>
  );
};

export default Login;