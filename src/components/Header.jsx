import React from "react";
import "./styles/header.css";
import BuapBlue from "../assets/images/buap_blue.png";
import react from "../assets/images/react-logo.png";
import { Link } from 'react-router-dom';
import BurgerMenu from '../assets/menu/menu_white.png';
require('dotenv').config();


class Header extends React.Component {

   burgerMenuClick = e => {
    this.headerMenu.classList.toggle('active');
    this.burgerButton.classList.toggle('active');
  }

  refHeaderMenu = e => {
    this.headerMenu = e;
  }

  refBurgerButton = e => {
    this.burgerButton = e;
  }

  render() {
    return (
      <div className="header">
  
        <div className="Logos">
          <img className="BuapLogo" src={BuapBlue} alt="" set="" />
          
          <div className="Content__QT">
            <img src={react} alt="" className="React"/>
            <p className="Logo__Name">Laboratorio de <br />
              Química Teorica
            </p>
          </div>
  
        </div>
  
        <span ref={this.refBurgerButton} onClick={this.burgerMenuClick} className="Burger__Menu">
          <img src={BurgerMenu}></img>
          </span>
  
          <nav ref={this.refHeaderMenu} className="menu" id="listMenu">
            <li>
              <Link to={process.env.PUBLIC_URL + "/programas"}>Programas</Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/servicio-socila"}>Servicio Social</Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/practices"}>Prácticas Profesionales</Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/ciencia"}>Ciencia</Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/desarollo"}>Desarollo de Proyectos</Link>
            </li>
            <li>
              <a href={process.env.PUBLIC_URL + "#footer"}>Más...</a>
            </li>
        </nav>
    
      </div>
    );
  }
};

export default Header;
