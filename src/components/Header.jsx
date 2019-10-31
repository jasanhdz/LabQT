import React from "react";
import "./styles/header.css";
import BuapBlue from "../assets/images/buap_blue.png";
import react from "../assets/menu/fcq_logo.png";
import { Link } from 'react-router-dom';
import BurgerMenu from '../assets/menu/menu_white.png';
import { connect } from "react-redux";
require('dotenv').config();


class Header extends React.Component {

   burgerMenuClick = e => {
    this.headerMenu.classList.toggle('active');
     this.burgerButton.classList.toggle('active');
     if (this.props.htmlMenuBefore) {
       this.props.htmlMenuBefore.classList.toggle('before');
     }
  }

  refHeaderMenu = e => {
    this.headerMenu = e;
  }

  refBurgerButton = e => {
    this.burgerButton = e;
  }

  signOut = e => {
    if (this.props.user) {
      firebase.auth().signOut()
        .then(() => {
          console.log(this.props)
          this.props.history.push(process.env.PUBLIC_URL + '/');
        })
        .catch(error => {
          alert(error);
      })
    } else {
      alert('No haz iniciado sesión :p');
      this.props.history.push(process.env.PUBLIC_URL + '/login');
    }
  }

  signInOrSigOut() {
    console.log()
    if (this.props.user) {
      return (
        <li onClick={this.signOut}>
          <a  href={ process.env.PUBLIC_URL + '/' }>Cerrar sesión</a>
        </li>
      );
    } else {
      return (
        <li>
          <Link  to={ process.env.PUBLIC_URL + '/login' }>Iniciar sesión</Link>
        </li>
      );
    }
  }

  loadingLinks(link, index) {
    return (
      <li key={index}>
          <Link to={ process.env.PUBLIC_URL + link.link } >{link.title}</Link>
      </li>
    )
  }

  render() {
    console.log(this.props.chatButton);
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
          {
            this.signInOrSigOut()
          }
          {
            this.props.links.map(this.loadingLinks)
          }
        </nav>
    
      </div>
    );
  }
};

function mapStateToProps(state, action) {
  return {
    htmlMenuBefore: state.get('modal').get('htmlMenuBefore'),
    user: state.get('data').get('user').get('uid')
  }
}

export default connect(mapStateToProps)(Header);
