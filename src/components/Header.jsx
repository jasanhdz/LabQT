import React from "react";
import "./styles/header.css";
import BuapBlue from "../assets/images/buap_blue.png";
import react from "../assets/images/react-logo.png";
import { Link } from 'react-router-dom';
import Avatar from '../assets/profile-2.png';
require('dotenv').config();

const Header = props => {
  const styles = {
    p: {
      marginiLeft: 4,
      color: "#bde5ff",
      fontWeight: 600,
      alignSelf: "center"
    },
  };
  return (
    <div className="header">
      <div className="wrapper">
        <div style={{ display: "flex" }}>
          <img className="BuapLogo" src={BuapBlue} alt="buap_blue" />
          <div style={{ display: "flex" }} className="Container_logo--react">
            <img src={react} alt="fcqmin" className="Fcqmin" />
            <p style={styles.p}>
              Laboratorio de <br />
              Quimica Teorica
            </p>
          </div>
        </div>

        <nav className="menu" id="listMenu">
          <li>
            <Link to={process.env.PUBLIC_URL + '/'}>Home</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/login"}>Login</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/register"}>Register</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/About"}>Perfil</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/Cursos"}>Cursos</Link>
          </li>
        </nav>
        <span className="icon icon-menu" id="burguerMenu"></span>
        <figure>
          <img src={Avatar} alt="avatar"/>
        </figure>
      </div>
    </div>
  );
};

export default Header;
