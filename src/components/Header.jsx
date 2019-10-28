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
              <Link to={process.env.PUBLIC_URL + "/"}>Home</Link>
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
    
      </div>
    );
  }
};

export default Header;
